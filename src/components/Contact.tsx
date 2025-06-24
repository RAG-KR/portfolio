import { Mail, Linkedin, Github, Youtube } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-5xl text-center">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tight">
          Let's Build<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Together
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium mb-12 max-w-3xl mx-auto">
          Have an exciting project in mind? I'd love to collaborate and bring your ideas to life 
          with clean, scalable code and innovative solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krraghavlm10@gmail.com" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-xl hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400 group-hover:animate-icon-glow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors text-sm">krraghavlm10@gmail.com</p>
          </a>
          
          <a href="https://www.linkedin.com/in/raghav-kr-890986269/" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-purple-400 group-hover:animate-icon-glow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors text-sm">@raghav-kr-890986269</p>
          </a>
          
          <a href="https://github.com/RAG-KR" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-xl hover:border-green-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Github className="w-6 h-6 text-green-400 group-hover:animate-icon-glow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors text-sm">@RAG-KR</p>
          </a>

          <a href="https://www.youtube.com/channel/UCcn8TZeezm3RwNjrwx9Msxw" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-xl hover:border-red-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-red-400/10">
            <div className="w-12 h-12 wireframe rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Youtube className="w-6 h-6 text-red-400 group-hover:animate-icon-glow" />
          </div>
            <h3 className="text-lg font-semibold mb-2">YouTube</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors text-sm">@raghav-kr</p>
          </a>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-zinc-400 italic">
            "The best code is not just functional, but tells a story of problem-solving and creativity."
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krraghavlm10@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className="wireframe px-12 py-4 rounded-lg text-lg font-medium hover:scale-105 transition-all duration-300">
            Start a Conversation
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};
