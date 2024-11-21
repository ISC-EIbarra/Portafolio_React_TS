import ProjectCard from '../components/ProjectCard';
import { dbProject } from '../data/db';

export default function Projects() {
  return (
    // orig: min-h-screen, without overflow-y-auto
    // test: max-h-screen overflow-y-auto
    <div className="min-h-screen p-4 flex flex-col gap-8 items-center bg-gradient-to-br from-blue-600 to-blue-800">
      <h1 className="mt-4 text-white font-black text-3xl md:text-4xl lg:text-5xl">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {dbProject.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
