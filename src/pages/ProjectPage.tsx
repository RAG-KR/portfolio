
import { ProjectDetail } from "@/components/ProjectDetail";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Navigation } from "@/components/Navigation";

const ProjectPage = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      <GeometricBackground />
      <Navigation />
      <main className="relative z-10">
        <ProjectDetail />
      </main>
    </div>
  );
};

export default ProjectPage;
