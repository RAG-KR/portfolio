
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app, this would come from an API or context
  const projectData = {
    "fullstack-ecommerce": {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and responsive design.",
      longDescription: "This project showcases my ability to build complex, scalable applications from the ground up. The platform includes user authentication, product catalog management, shopping cart functionality, order processing, and an admin dashboard. The real-time features are powered by Socket.io, ensuring users see live inventory updates and order status changes.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe API", "JWT", "Docker"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      demoUrl: "https://ecommerce-demo.raghav.dev",
      githubUrl: "https://github.com/raghav/ecommerce-platform",
      features: [
        "User authentication and authorization",
        "Real-time inventory management",
        "Secure payment processing with Stripe",
        "Responsive design for all devices",
        "Admin dashboard with analytics",
        "Email notifications and order tracking"
      ],
      challenges: "The main challenge was implementing real-time inventory updates across multiple user sessions while maintaining data consistency. I solved this using Socket.io for real-time communication and implementing optimistic UI updates with proper error handling.",
      color: "blue"
    },
    "ai-chat-app": {
      title: "AI Chat Application",
      description: "An intelligent chat application integrating OpenAI's GPT models with a sleek, modern interface and real-time messaging capabilities.",
      longDescription: "This application demonstrates my skills in integrating AI services with modern web technologies. Built with Next.js for optimal performance and SEO, it features context-aware conversations, message history, and a beautiful, responsive UI that works seamlessly across all devices.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "TailwindCSS", "WebSockets", "Vercel"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      demoUrl: "https://ai-chat.raghav.dev",
      githubUrl: "https://github.com/raghav/ai-chat-app",
      features: [
        "Integration with OpenAI GPT models",
        "Real-time messaging with WebSockets",
        "Conversation history and context awareness",
        "Message streaming for better UX",
        "Dark/light mode toggle",
        "Export conversations as PDF"
      ],
      challenges: "Managing API rate limits and costs while providing a smooth user experience was crucial. I implemented request queuing, intelligent caching, and streaming responses to optimize both performance and cost efficiency.",
      color: "purple"
    },
    "task-management": {
      title: "Task Management System",
      description: "A collaborative task management platform with real-time updates, analytics, and team collaboration features.",
      longDescription: "This project showcases my expertise in building collaborative applications with complex state management and real-time synchronization. The platform supports multiple teams, project hierarchies, and provides detailed analytics to help teams track their productivity and progress.",
      tech: ["React", "Express.js", "PostgreSQL", "Redis", "Chart.js", "Docker", "AWS"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      demoUrl: "https://tasks.raghav.dev",
      githubUrl: "https://github.com/raghav/task-management",
      features: [
        "Team collaboration and role management",
        "Real-time task updates and notifications",
        "Advanced filtering and search capabilities",
        "Time tracking and productivity analytics",
        "Kanban board and list views",
        "File attachments and comments"
      ],
      challenges: "The biggest challenge was implementing efficient real-time synchronization for multiple users working on the same projects. I used Redis for caching and pub/sub functionality, along with optimistic updates to ensure a responsive user experience.",
      color: "emerald"
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="wireframe px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      emerald: "from-emerald-500 to-green-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
              >
                Live Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wireframe px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Youtube className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-semibold">Project Showcase</h2>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Overview */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              {project.longDescription}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Key Challenge</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`
                    w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${getColorClasses(project.color)}
                  `}></div>
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 wireframe rounded-lg text-sm font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
