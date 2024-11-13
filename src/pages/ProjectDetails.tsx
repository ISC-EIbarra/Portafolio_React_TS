import { useLocation } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string;
  core: string;
  status: string;
}

export default function ProjectDetails() {
  const location = useLocation();
  const project = location.state as Project | null;

  if (!project) return <p>No se encontró el proyecto.</p>;

  return (
    <>
      <div>
        <p>{project.name}</p>
      </div>
    </>
  );
}
