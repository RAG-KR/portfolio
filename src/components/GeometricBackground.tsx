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

    // Simplified shapes data with less overwhelming properties
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "circle" | "triangle" | "square" | "hexagon" | "diamond";
      opacity: number;
      layer: number;
      color: string;
      initialX: number;
      initialY: number;
    }> = [];

    // Moderately bright color palette (15% brighter than original muted)
    const colors = [
      "#7ab5ff", // brighter blue-400
      "#b89bff", // brighter violet-400
      "#4de6a6", // brighter emerald-400
      "#ffcf47", // brighter amber-400
      "#ff85c4", // brighter pink-400
      "#1fc7e8", // brighter cyan-400
    ];

    // Create fewer, less distracting shapes
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      shapes.push({
        x: x,
        y: y,
        initialX: x,
        initialY: y,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ["circle", "triangle", "square", "hexagon", "diamond"][Math.floor(Math.random() * 5)] as any,
        opacity: Math.random() * 0.4 + 0.2, // More subtle opacity
        layer: Math.floor(Math.random() * 3),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - canvas.width / 2) / canvas.width;
      mouseY = (e.clientY - canvas.height / 2) / canvas.height;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save();
      
      // Subtle glow effect
      ctx.shadowColor = shape.color;
      ctx.shadowBlur = 8;
      
      // Calculate parallax position based on mouse and scroll
      const parallaxStrength = (shape.layer + 1) * 20;
      const scrollParallax = scrollY * (shape.layer + 1) * 0.1;
      
      const finalX = shape.initialX + (mouseX * parallaxStrength) + Math.sin(Date.now() * 0.001 + shape.initialX * 0.01) * 10;
      const finalY = shape.initialY + (mouseY * parallaxStrength) + scrollParallax + Math.cos(Date.now() * 0.001 + shape.initialY * 0.01) * 8;
      
      ctx.translate(finalX, finalY);
      ctx.rotate(shape.rotation);
      
      ctx.strokeStyle = shape.color;
      ctx.globalAlpha = shape.opacity;
      ctx.lineWidth = 1.5;

      const size = shape.size;

      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
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
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        // Gentle rotation
        shape.rotation += shape.rotationSpeed;

        // Keep shapes within reasonable bounds
        if (shape.initialX < -100) shape.initialX = canvas.width + 100;
        if (shape.initialX > canvas.width + 100) shape.initialX = -100;
        if (shape.initialY < -100) shape.initialY = canvas.height + 100;
        if (shape.initialY > canvas.height + 100) shape.initialY = -100;

        drawShape(shape);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};
