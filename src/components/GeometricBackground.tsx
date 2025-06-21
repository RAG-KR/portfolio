
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

    // Geometric shapes data
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "circle" | "triangle" | "square" | "hexagon";
      opacity: number;
      layer: number;
    }> = [];

    // Create shapes
    for (let i = 0; i < 30; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ["circle", "triangle", "square", "hexagon"][Math.floor(Math.random() * 4)] as any,
        opacity: Math.random() * 0.3 + 0.1,
        layer: Math.floor(Math.random() * 3)
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.strokeStyle = `rgba(255, 255, 255, ${shape.opacity})`;
      ctx.lineWidth = 1;

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
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        // Parallax based on layer
        const parallaxFactor = (shape.layer + 1) * 0.5;
        const mouseInfluence = 50 / (shape.layer + 1);
        const scrollInfluence = scrollY * parallaxFactor * 0.1;

        // Update position based on mouse and scroll
        shape.x += (mouseX - canvas.width / 2) * 0.00005 * mouseInfluence;
        shape.y += (mouseY - canvas.height / 2) * 0.00005 * mouseInfluence;
        shape.y += scrollInfluence * 0.1;

        // Update rotation
        shape.rotation += shape.rotationSpeed;

        // Wrap around screen
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;

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
