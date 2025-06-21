
export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tight">
              About<br />Precision
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium mb-8">
              I believe in the power of geometric forms to communicate complex ideas through 
              elegant simplicity. Each project is an exploration of spatial relationships 
              and mathematical harmony.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="wireframe p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Design</h3>
                <p className="text-zinc-400">Geometric precision meets creative expression</p>
              </div>
              <div className="wireframe p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Development</h3>
                <p className="text-zinc-400">Clean code with mathematical elegance</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass p-12 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-8 wireframe rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-blue-400 rounded-lg animate-float"></div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Creative Technologist</h3>
                <p className="text-lg text-zinc-300 italic">
                  "Geometry reveals the mathematical poetry hidden within spatial relationships."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
