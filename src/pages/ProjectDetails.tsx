import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Section from '../components/Section';
import { Button } from '@nextui-org/react';

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

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  if (!project) return <p>No se encontró el proyecto.</p>;

  return (
    <div className="min-h-screen p-4">
      <h1 className="mt-4 text-center font-black text-slate-900 text-3xl md:text-4xl lg:text-5xl">
        {project.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <ImageGallery items={images} showBullets showIndex />
        </div>
        <div className="flex flex-col gap-4">
          <Section title="Descripción" content={project.description} />
          <Section
            title="Tecnologías utilizadas"
            content={project.technologies}
          />
          <Section title="Estado del proyecto" content={project.status} />

          <div className="flex gap-4">
            <Button className="bg-black text-white font-medium rounded-full">
              Visitar Repositorio - GitHub
            </Button>
            <Button className="bg-blue-600 text-white font-medium rounded-full">
              Visitar Proyecto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
