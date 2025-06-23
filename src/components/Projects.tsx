import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: "hive-mind",
      title: "HiveMind",
      description: "An AI-powered SaaS tool that turns any learning prompt into a clear, structured, and editable mind map.",
      tech: ["React", "AI/ML", "SaaS", "Next.js"],
      status: "Completed",
      color: "purple",
      videoUrl: "https://www.youtube.com/watch?v=t1Y83P7CYzo",
      demoUrl: "#"
    },
    {
      id: "ai-web-scraper",
      title: "AI-Powered Web Scraper",
      description: "An intelligent web scraper using Solana, Streamlit, and Ollama to run LLM inference directly on-machine.",
      tech: ["Solana", "Streamlit", "Ollama", "Python"],
      status: "Completed",
      color: "blue",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7236412218987134976/"
    },
    {
      id: "flappy-bird-ai",
      title: "AI Learns to Play Flappy Bird",
      description: "An AI that learns to play Flappy Bird through generations of mutation and selection using the NEAT algorithm.",
      tech: ["Python", "Pygame", "NEAT-Python", "AI/ML"],
      status: "Completed",
      color: "green",
      videoUrl: "https://www.youtube.com/shorts/JzY4yAuCLLg?feature=share",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7340743794641838082/"
    },
    {
      id: "freetube",
      title: "FreeTube",
      description: "A YouTube clone featuring video streaming and a familiar UI, built with React and Material-UI.",
      tech: ["React", "Material-UI", "YouTube API"],
      status: "Completed",
      color: "red",
      videoUrl: "https://youtu.be/WyaR0VD2Sss",
      demoUrl: "https://fretube.netlify.app/"
    },
    {
      id: "live-docs",
      title: "LiveDocs",
      description: "A real-time collaborative document editor for teams, inspired by Google Docs.",
      tech: ["React", "WebSockets", "Node.js", "MongoDB"],
      status: "Development",
      color: "orange",
      videoUrl: "#",
      demoUrl: "#"
    },
    {
      id: "bolt-clone",
      title: "Bolt.new Clone",
      description: "An intuitive, component-based website builder for creating stunning landing pages with no code.",
      tech: ["React", "Drag-and-Drop", "Next.js", "Firebase"],
      status: "Development",
      color: "yellow",
      videoUrl: "#",
      demoUrl: "#"
    },
    {
      id: "ai-chat-app",
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration and modern UI/UX.",
      tech: ["Next.js", "OpenAI API", "Prisma", "TailwindCSS"],
      status: "Development",
      color: "emerald",
      videoUrl: "#",
      demoUrl: "#"
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      blue: isHovered ? "border-blue-400 shadow-blue-400/30" : "border-blue-400/30",
      purple: isHovered ? "border-purple-400 shadow-purple-400/30" : "border-purple-400/30",
      emerald: isHovered ? "border-emerald-400 shadow-emerald-400/30" : "border-emerald-400/30",
      green: isHovered ? "border-green-400 shadow-green-400/30" : "border-green-400/30",
      red: isHovered ? "border-red-400 shadow-red-400/30" : "border-red-400/30",
      orange: isHovered ? "border-orange-400 shadow-orange-400/30" : "border-orange-400/30",
      yellow: isHovered ? "border-yellow-400 shadow-yellow-400/30" : "border-yellow-400/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
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
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Animated background gradient */}
              <div className={`
                absolute inset-0 opacity-0 transition-opacity duration-700
                ${hoveredProject === index ? 'opacity-10' : ''}
                bg-gradient-to-br ${
                  project.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                  project.color === 'purple' ? 'from-purple-500 to-pink-500' :
                  project.color === 'green' ? 'from-green-500 to-teal-500' :
                  project.color === 'red' ? 'from-red-500 to-rose-500' :
                  project.color === 'orange' ? 'from-orange-500 to-amber-500' :
                  project.color === 'yellow' ? 'from-yellow-500 to-lime-500' :
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
                      project.color === 'green' ? 'bg-gradient-to-br from-green-400 to-teal-400' :
                      project.color === 'red' ? 'bg-gradient-to-br from-red-400 to-rose-400' :
                      project.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-amber-400' :
                      project.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-lime-400' :
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
                <div className="mt-4">
                  <div className={`
                    w-full py-3 px-4 rounded-lg font-medium transition-all duration-500 relative overflow-hidden text-center
                    ${hoveredProject === index 
                      ? 'glass bg-white/10 shadow-lg transform translate-y-[-2px]' 
                      : 'glass hover:bg-white/5'
                    }
                  `}>
                    <span className="relative z-10">
                      {hoveredProject === index ? 'View Project Details →' : 'Click to Explore'}
                    </span>
                    {hoveredProject === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_1s_ease-in-out_infinite]"></div>
                    )}
                  </div>
                </div>
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
                          project.color === 'green' ? 'bg-green-400' :
                          project.color === 'red' ? 'bg-red-400' :
                          project.color === 'orange' ? 'bg-orange-400' :
                          project.color === 'yellow' ? 'bg-yellow-400' :
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
