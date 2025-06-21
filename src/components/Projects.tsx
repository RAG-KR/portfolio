
import { useState } from "react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Neural Networks",
      description: "Visualizing complex data structures through geometric wireframe interfaces",
      tech: ["React", "Three.js", "GLSL"],
      status: "Live",
      color: "blue"
    },
    {
      title: "Parallax Studio",
      description: "Interactive 3D experiences with mathematical precision and depth",
      tech: ["WebGL", "Canvas", "TypeScript"],
      status: "Development",
      color: "purple"
    },
    {
      title: "Geometric API",
      description: "RESTful services designed with clean architectural patterns",
      tech: ["Node.js", "GraphQL", "Docker"],
      status: "Live",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      blue: isHovered ? "border-blue-400 shadow-blue-400/30" : "border-blue-400/30",
      purple: isHovered ? "border-purple-400 shadow-purple-400/30" : "border-purple-400/30",
      emerald: isHovered ? "border-emerald-400 shadow-emerald-400/30" : "border-emerald-400/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
              className={`
                p-8 rounded-xl group relative overflow-hidden cursor-pointer
                transition-all duration-700 ease-out
                ${hoveredProject === index 
                  ? `scale-110 shadow-2xl ${getColorClasses(project.color, true)}` 
                  : `scale-100 wireframe ${getColorClasses(project.color, false)}`
                }
                ${hoveredProject !== null && hoveredProject !== index ? 'opacity-60 scale-95' : ''}
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated background gradient */}
              <div className={`
                absolute inset-0 opacity-0 transition-opacity duration-700
                ${hoveredProject === index ? 'opacity-10' : ''}
                bg-gradient-to-br ${
                  project.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                  project.color === 'purple' ? 'from-purple-500 to-pink-500' :
                  'from-emerald-500 to-green-500'
                }
              `}></div>

              <div className="absolute top-4 right-4 z-10">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500
                  ${project.status === "Live" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }
                  ${hoveredProject === index ? 'animate-pulse-glow' : ''}
                `}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-6 relative z-10">
                <div className={`
                  w-16 h-16 wireframe rounded-lg flex items-center justify-center mb-4 
                  transition-all duration-500 group-hover:scale-110
                  ${hoveredProject === index ? 'animate-float' : ''}
                `}>
                  <div className={`
                    w-8 h-8 rounded transition-all duration-500
                    ${
                      project.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-cyan-400' :
                      project.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-pink-400' :
                      'bg-gradient-to-br from-emerald-400 to-green-400'
                    }
                    ${hoveredProject === index ? 'animate-pulse-glow scale-125' : 'opacity-60'}
                  `}></div>
                </div>
                <h3 className={`
                  text-2xl font-bold mb-3 transition-all duration-500
                  ${hoveredProject === index ? 'text-white transform translate-y-[-2px]' : ''}
                `}>
                  {project.title}
                </h3>
                <p className={`
                  text-zinc-400 leading-relaxed mb-6 transition-all duration-500
                  ${hoveredProject === index ? 'text-zinc-300' : ''}
                `}>
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-3 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`
                        px-3 py-1 text-xs font-medium border rounded-md transition-all duration-500
                        ${hoveredProject === index 
                          ? 'border-zinc-600 text-zinc-200 bg-zinc-800/50' 
                          : 'border-zinc-700 text-zinc-300'
                        }
                      `}
                      style={{ 
                        transitionDelay: `${techIndex * 50}ms` 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className={`
                  w-full py-3 rounded-lg font-medium transition-all duration-500 relative overflow-hidden
                  ${hoveredProject === index 
                    ? 'glass bg-white/10 shadow-lg transform translate-y-[-2px]' 
                    : 'glass hover:bg-white/5'
                  }
                `}>
                  <span className="relative z-10">
                    {hoveredProject === index ? 'Launch Project →' : 'View Project'}
                  </span>
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_1s_ease-in-out_infinite]"></div>
                  )}
                </button>
              </div>

              {/* Floating particles effect on hover */}
              {hoveredProject === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        absolute w-1 h-1 rounded-full animate-float opacity-70
                        ${
                          project.color === 'blue' ? 'bg-blue-400' :
                          project.color === 'purple' ? 'bg-purple-400' :
                          'bg-emerald-400'
                        }
                      `}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
