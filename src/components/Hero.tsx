
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InitialLoadingAnimation } from "./InitialLoadingAnimation";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load by checking sessionStorage
    const hasLoadedBefore = sessionStorage.getItem('portfolioLoaded');
    if (hasLoadedBefore) {
      setIsFirstLoad(false);
      setShowLoadingAnimation(false);
    } else {
      sessionStorage.setItem('portfolioLoaded', 'true');
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowLoadingAnimation(false);
  };

  useEffect(() => {
    if (!showLoadingAnimation) {
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const buttons = buttonsRef.current;

      if (title && subtitle && buttons) {
        // Initial state
        title.style.opacity = "0";
        title.style.transform = "translateY(50px)";
        subtitle.style.opacity = "0";
        subtitle.style.transform = "translateY(30px)";
        buttons.style.opacity = "0";
        buttons.style.transform = "translateY(20px)";

        // Animate in sequence
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

        setTimeout(() => {
          buttons.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
          buttons.style.opacity = "1";
          buttons.style.transform = "translateY(0)";
        }, 1200);
      }
    }

    // Subtle mouse tracking for gentle parallax text effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showLoadingAnimation]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showLoadingAnimation && isFirstLoad && (
          <InitialLoadingAnimation onComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>

      <section id="hero" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="max-w-7xl text-center relative z-10">
          <h1 
            ref={titleRef}
            className="text-7xl md:text-9xl font-bold leading-tight mb-12 tracking-tight"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          >
            Hi, I'm<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Raghav
            </span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-zinc-300 font-medium"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
            }}
          >
            A passionate software developer crafting digital experiences through clean code and innovative solutions,
            where functionality meets elegant design.
          </p>
          <div 
            ref={buttonsRef}
            className="mt-16 flex justify-center space-x-8"
          >
            <button 
              onClick={() => scrollToSection("projects")}
              className="group wireframe px-8 py-4 rounded-lg text-lg font-medium transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="group glass px-8 py-4 rounded-lg text-lg font-medium transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>

        {/* Simplified floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 wireframe rounded-full opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 wireframe rounded-lg opacity-15"></div>
          <div className="absolute top-1/2 right-1/3 w-10 h-10 wireframe rounded-full opacity-10"></div>
        </div>
      </section>
    </>
  );
};
