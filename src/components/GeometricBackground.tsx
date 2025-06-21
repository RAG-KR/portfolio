
import { useEffect, useRef } from "react";

export const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced geometric shapes data with more properties
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "circle" | "triangle" | "square" | "hexagon" | "diamond" | "star";
      opacity: number;
      layer: number;
      color: string;
      glowIntensity: number;
      pulse: number;
      pulseSpeed: number;
      trail: Array<{x: number, y: number, opacity: number}>;
      velocity: {x: number, y: number};
    }> = [];

    // Color palette for bright, vibrant shapes
    const colors = [
      "#60a5fa", // blue-400
      "#a78bfa", // violet-400
      "#34d399", // emerald-400
      "#fbbf24", // amber-400
      "#f472b6", // pink-400
      "#06b6d4", // cyan-400
      "#10b981", // emerald-500
      "#8b5cf6", // violet-500
      "#ffffff", // white
    ];

    // Create enhanced shapes
    for (let i = 0; i < 50; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 80 + 30,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        type: ["circle", "triangle", "square", "hexagon", "diamond", "star"][Math.floor(Math.random() * 6)] as any,
        opacity: Math.random() * 0.8 + 0.3,
        layer: Math.floor(Math.random() * 3),
        color: color,
        glowIntensity: Math.random() * 20 + 10,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        trail: [],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add mouse interaction - shapes react to cursor
      shapes.forEach((shape) => {
        const dx = mouseX - shape.x;
        const dy = mouseY - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          shape.velocity.x += (dx / distance) * force * 0.1;
          shape.velocity.y += (dy / distance) * force * 0.1;
          shape.glowIntensity = Math.min(40, shape.glowIntensity + force * 20);
        }
      });
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleClick = (e: MouseEvent) => {
      // Create explosion effect on click
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const speed = Math.random() * 5 + 2;
        shapes.push({
          x: clickX,
          y: clickY,
          size: Math.random() * 30 + 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          type: ["circle", "triangle", "square"][Math.floor(Math.random() * 3)] as any,
          opacity: 0.8,
          layer: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          glowIntensity: 30,
          pulse: 0,
          pulseSpeed: 0.05,
          trail: [],
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
          }
        });
      }
      
      // Remove excess shapes
      if (shapes.length > 100) {
        shapes.splice(50, shapes.length - 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save();
      
      // Add glow effect
      ctx.shadowColor = shape.color;
      ctx.shadowBlur = shape.glowIntensity;
      
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      // Dynamic opacity with pulse
      const pulseOpacity = shape.opacity + Math.sin(shape.pulse) * 0.3;
      ctx.strokeStyle = shape.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, pulseOpacity));
      ctx.lineWidth = 2;

      const size = shape.size + Math.sin(shape.pulse) * 5;

      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.stroke();
          // Add inner circle for depth
          ctx.beginPath();
          ctx.arc(0, 0, size / 4, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(-size / 2, size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.closePath();
          ctx.stroke();
          break;
        case "square":
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          // Add inner square
          ctx.strokeRect(-size / 4, -size / 4, size / 2, size / 2);
          break;
        case "hexagon":
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = (size / 2) * Math.cos(angle);
            const y = (size / 2) * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;
        case "diamond":
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(size / 2, 0);
          ctx.lineTo(0, size / 2);
          ctx.lineTo(-size / 2, 0);
          ctx.closePath();
          ctx.stroke();
          break;
        case "star":
          ctx.beginPath();
          for (let i = 0; i < 10; i++) {
            const angle = (i * Math.PI) / 5;
            const radius = i % 2 === 0 ? size / 2 : size / 4;
            const x = radius * Math.cos(angle - Math.PI / 2);
            const y = radius * Math.sin(angle - Math.PI / 2);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape, index) => {
        // Parallax based on layer with enhanced movement
        const parallaxFactor = (shape.layer + 1) * 0.8;
        const mouseInfluence = 100 / (shape.layer + 1);
        const scrollInfluence = scrollY * parallaxFactor * 0.15;

        // Update position with enhanced physics
        shape.x += shape.velocity.x;
        shape.y += shape.velocity.y;
        
        // Add wave motion
        shape.x += Math.sin(time + index) * 0.5;
        shape.y += Math.cos(time + index * 0.7) * 0.3;

        // Mouse influence with smoother transition
        const mouseDistanceX = (mouseX - canvas.width / 2) * 0.0001 * mouseInfluence;
        const mouseDistanceY = (mouseY - canvas.height / 2) * 0.0001 * mouseInfluence;
        shape.x += mouseDistanceX;
        shape.y += mouseDistanceY;

        // Scroll influence
        shape.y += scrollInfluence * 0.1;

        // Apply friction to velocities
        shape.velocity.x *= 0.95;
        shape.velocity.y *= 0.95;

        // Update rotation with variable speed
        shape.rotation += shape.rotationSpeed;

        // Update pulse animation
        shape.pulse += shape.pulseSpeed;

        // Gradually reduce glow intensity
        shape.glowIntensity = Math.max(10, shape.glowIntensity * 0.99);

        // Wrap around screen with buffer
        const buffer = 200;
        if (shape.x < -buffer) shape.x = canvas.width + buffer;
        if (shape.x > canvas.width + buffer) shape.x = -buffer;
        if (shape.y < -buffer) shape.y = canvas.height + buffer;
        if (shape.y > canvas.height + buffer) shape.y = -buffer;

        // Remove temporary shapes after some time
        if (shapes.length > 50 && Math.random() < 0.001) {
          shapes.splice(index, 1);
          return;
        }

        drawShape(shape);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto cursor-crosshair"
      style={{ background: "transparent" }}
    />
  );
};
