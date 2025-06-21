
import { useEffect, useRef } from "react";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title && subtitle) {
      // Initial state
      title.style.opacity = "0";
      title.style.transform = "translateY(50px)";
      subtitle.style.opacity = "0";
      subtitle.style.transform = "translateY(30px)";

      // Animate in
      setTimeout(() => {
        title.style.transition = "all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 300);

      setTimeout(() => {
        subtitle.style.transition = "all 1s cubic-bezier(0.165, 0.84, 0.44, 1)";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
      }, 800);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 relative">
      <div className="max-w-7xl text-center">
        <h1 
          ref={titleRef}
          className="text-7xl md:text-9xl font-bold leading-tight mb-12 tracking-tight"
        >
          Geometric<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Portfolio
          </span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-zinc-300 font-medium"
        >
          Crafting digital experiences through geometric precision and creative innovation, 
          where design meets mathematical beauty in perfect harmony.
        </p>
        <div className="mt-16 flex justify-center space-x-8">
          <button className="wireframe px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105">
            View Projects
          </button>
          <button className="glass px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
