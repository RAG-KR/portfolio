
export const Projects = () => {
  const projects = [
    {
      title: "Neural Networks",
      description: "Visualizing complex data structures through geometric wireframe interfaces",
      tech: ["React", "Three.js", "GLSL"],
      status: "Live"
    },
    {
      title: "Parallax Studio",
      description: "Interactive 3D experiences with mathematical precision and depth",
      tech: ["WebGL", "Canvas", "TypeScript"],
      status: "Development"
    },
    {
      title: "Geometric API",
      description: "RESTful services designed with clean architectural patterns",
      tech: ["Node.js", "GraphQL", "Docker"],
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-16 text-center tracking-tight">
          Featured<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="wireframe p-8 rounded-xl group hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Live" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 wireframe rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded opacity-60 animate-pulse-glow"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium border border-zinc-700 rounded-md text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full glass py-3 rounded-lg font-medium hover:bg-white/5 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
