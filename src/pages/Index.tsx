
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      <GeometricBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
