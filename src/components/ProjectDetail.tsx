import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectData: { [key:string]: any } = {
    "hive-mind": {
      title: "HiveMind",
      description: "An AI-powered SaaS tool that turns any learning prompt into a clear, structured, and editable mind map.",
      longDescription: "HiveMind is a Software-as-a-Service application designed to accelerate learning and research. By inputting a simple prompt, users can generate comprehensive, hierarchical mind maps. The application leverages large language models to structure information logically, providing a visual and intuitive way to explore complex topics. It features an interactive, editable canvas and was built using Next.js for the frontend and a Python backend for AI processing.",
      tech: ["React", "AI/ML", "SaaS", "Next.js", "Python", "Stripe"],
      features: ["AI-powered mind map generation", "Interactive and editable canvas", "Hierarchical structure visualization", "User authentication", "Stripe integration for subscriptions"],
      challenges: "The core challenge was ensuring the AI consistently produced logically structured and accurate mind maps from a wide variety of prompts. This required extensive prompt engineering and a robust validation system to maintain output quality.",
      githubUrl: "https://github.com/RAG-KR/HiveMind",
      demoUrl: "https://www.linkedin.com/posts/raghav-kr-890986269_mindmap-aiforlearning-saasproduct-activity-7327345321062084608-eKtg?utm_source=share&utm_medium=member_desktop",
      videoUrl: "https://www.youtube.com/embed/t1Y83P7CYzo",
      color: "purple",
    },
    "ai-web-scraper": {
      title: "AI-Powered Web Scraper",
      description: "An intelligent web scraper using Solana, Streamlit, and Ollama to run LLM inference directly on-machine.",
      longDescription: "This project showcases an advanced web scraping tool that integrates on-device AI for intelligent data extraction. It uses Streamlit for the interactive user interface, Solana for potential blockchain-based features, and Ollama to run large language models locally. This setup allows for powerful, privacy-preserving data analysis without relying on cloud-based AI services.",
      tech: ["Solana", "Streamlit", "Ollama", "Python", "AI/ML"],
      features: ["On-device LLM inference", "Interactive Streamlit UI", "Intelligent data extraction", "Privacy-focused architecture"],
      challenges: "Optimizing the performance of a large language model running on local hardware was a significant hurdle. Careful model selection and quantization techniques were necessary to achieve acceptable inference speeds without sacrificing too much accuracy.",
      githubUrl: "https://github.com/RAG-KR/ai-web-scraper",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7236412218987134976/",
      videoUrl: "#", 
      color: "blue",
    },
    "flappy-bird-ai": {
      title: "AI Learns to Play Flappy Bird",
      description: "An AI that learns to play Flappy Bird through generations of mutation and selection using the NEAT algorithm.",
      longDescription: "This project is a fascinating demonstration of neuroevolution in action. Using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm, successive generations of neural networks are evolved to master the game of Flappy Bird. The AI starts with no knowledge and, through a process of mutation and selection based on performance, gradually develops sophisticated strategies to navigate the obstacles. It's built with Python and Pygame for the simulation, and NEAT-Python for the core AI logic.",
      tech: ["Python", "Pygame", "NEAT-Python", "AI/ML"],
      features: ["Neuroevolution with NEAT", "Genetic algorithm principles", "Real-time AI learning", "Performance visualization"],
      challenges: "Tuning the NEAT algorithm's hyperparameters (mutation rates, population size, etc.) was key to achieving efficient learning. It required many iterations to find the right balance between exploration and exploitation to avoid premature convergence on suboptimal strategies.",
      githubUrl: "https://github.com/RAG-KR/Flappy_bird_ai_NEAT",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7340743794641838082/",
      videoUrl: "https://www.youtube.com/embed/JzY4yAuCLLg?feature=share",
      color: "green",
    },
    "freetube": {
      title: "FreeTube",
      description: "A YouTube clone featuring video streaming and a familiar UI, built with React and Material-UI.",
      longDescription: "FreeTube is a web application that replicates the core functionality of YouTube. It allows users to browse, search, and watch videos using the official YouTube API. The interface is built with React and styled with Material-UI to provide a clean and recognizable user experience. This project demonstrates strong frontend development skills and the ability to integrate with third-party APIs.",
      tech: ["React", "Material-UI", "YouTube API", "RapidAPI"],
      features: ["Video browsing and search", "YouTube API integration", "Responsive UI", "Channel and video pages"],
      challenges: "Dealing with the YouTube API's quota limits was a primary challenge. I implemented caching strategies for popular requests to minimize API calls and ensure the application remained responsive and available.",
      githubUrl: "https://github.com/RAG-KR/freeTube-vid-streaming-platform-",
      demoUrl: "https://fretube.netlify.app/",
      videoUrl: "https://www.youtube.com/embed/WyaR0VD2Sss",
      color: "red",
    },
    "live-docs": {
        title: "LiveDocs",
        description: "A real-time collaborative document editor for teams, inspired by Google Docs.",
        longDescription: "LiveDocs is a proof-of-concept for a real-time collaborative text editor. It enables multiple users to edit the same document simultaneously, with changes reflected instantly for all participants. The backend is powered by WebSockets to maintain persistent connections and synchronize document states. This project explores the complexities of real-time data handling and collaborative application architecture.",
        tech: ["React", "WebSockets", "Node.js", "MongoDB", "Express.js"],
        features: ["Real-time collaborative editing", "User presence indicators", "Document creation and saving", "WebSocket-based synchronization"],
        challenges: "The main complexity was in managing concurrent edits and resolving conflicts to ensure document consistency for all users. Implementing an operational transformation (OT) or similar conflict-resolution algorithm was the key challenge.",
        githubUrl: "#",
        demoUrl: "#",
        videoUrl: "#",
        color: "orange",
    },
    "bolt-clone": {
        title: "Bolt.new Clone",
        description: "An intuitive, component-based website builder for creating stunning landing pages with no code.",
        longDescription: "This project is a clone of the Bolt.new website builder, focusing on a user-friendly, drag-and-drop interface for creating web pages. Users can select from a library of pre-built components and arrange them on a canvas to design custom landing pages. The application is built with a modern frontend stack and uses Firebase for backend services, demonstrating skills in creating complex user interfaces and full-stack development.",
        tech: ["React", "Drag-and-Drop", "Next.js", "Firebase", "Component-Based"],
        features: ["Drag-and-drop page builder", "Component library", "Real-time preview", "Firebase integration for backend", "Responsive page generation"],
        challenges: "Implementing an intuitive and performant drag-and-drop interface was the most challenging aspect. It required careful state management and optimization to ensure a smooth user experience, especially with a large number of components on the page.",
        githubUrl: "#",
        demoUrl: "#",
        videoUrl: "#",
        color: "yellow",
    },
    "ai-chat-app": {
      title: "AI Chat Application",
        description: "Real-time chat application with AI integration and modern UI/UX.",
        longDescription: "This is a feature-rich chat application that integrates a large language model to provide intelligent responses and assistance. It features a sleek, modern interface built with Next.js and TailwindCSS, a robust backend using Prisma for database management, and real-time communication capabilities. It's a comprehensive example of a full-stack AI-powered application.",
        tech: ["Next.js", "OpenAI API", "Prisma", "TailwindCSS", "WebSockets"],
        features: ["Integration with OpenAI GPT models", "Real-time messaging with WebSockets", "Conversation history and context awareness", "Message streaming for better UX", "Dark/light mode toggle"],
      challenges: "Managing API rate limits and costs while providing a smooth user experience was crucial. I implemented request queuing, intelligent caching, and streaming responses to optimize both performance and cost efficiency.",
        githubUrl: "#",
        demoUrl: "#",
        videoUrl: "#",
        color: "emerald",
    },
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
      emerald: "from-emerald-500 to-green-500",
      green: "from-green-500 to-teal-500",
      red: "from-red-500 to-rose-500",
      orange: "from-orange-500 to-amber-500",
      yellow: "from-yellow-500 to-lime-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const videoSrc = project.videoUrl && project.videoUrl !== "#" 
    ? project.videoUrl 
    : "https://www.youtube.com/embed/dQw4w9WgXcQ";

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
                className={`glass px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 ${project.demoUrl === '#' ? 'hidden' : ''}`}
              >
                Live Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`wireframe px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 ${project.githubUrl === '#' ? 'hidden' : ''}`}
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
                src={videoSrc}
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
              {project.features.map((feature: string, index: number) => (
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
            {project.tech.map((tech: string, index: number) => (
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
