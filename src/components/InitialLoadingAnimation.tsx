
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { Typewriter } from "@/components/ui/typewriter";

interface InitialLoadingAnimationProps {
  onComplete: () => void;
}

export const InitialLoadingAnimation = ({ onComplete }: InitialLoadingAnimationProps) => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    // Show the first animation (Namaste World!) for 3 seconds
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false);
      setShowTypewriter(true);
    }, 3000);

    // Complete the entire animation sequence after 8 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      clearTimeout(greetingTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {showGreeting && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="Namaste World! 🙏"
            textClassName="text-6xl md:text-8xl font-bold text-white"
            underlineClassName="text-blue-400"
            underlineDuration={2}
          />
        </motion.div>
      )}

      {showTypewriter && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-medium text-white mb-4">
            <span>{"I'm "}</span>
            <Typewriter
              text={[
                "Raghav",
                "a Software Developer",
                "a Problem Solver",
                "passionate about code",
                "building the future"
              ]}
              speed={100}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              waitTime={1000}
              deleteSpeed={50}
              cursorChar={"_"}
              loop={true}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
