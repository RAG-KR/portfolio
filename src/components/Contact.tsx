
export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tight">
          Let's Create<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Together
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium mb-12 max-w-3xl mx-auto">
          Ready to transform your ideas into geometric reality? Let's discuss how mathematical 
          precision can elevate your next project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-400 rounded animate-pulse-glow"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-zinc-400">hello@geometric.dev</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-400 rounded animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-zinc-400">@geometric-portfolio</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-green-400 rounded animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-zinc-400">@geometric-dev</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-zinc-400 italic">
            "The outline defines space by what it separates from the infinite."
          </p>
          <button className="wireframe px-12 py-4 rounded-lg text-lg font-medium hover:scale-105 transition-all duration-300">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};
