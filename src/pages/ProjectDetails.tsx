import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Section from '../components/Section';
import { Button } from '@nextui-org/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string;
  core: string;
  status: string;
  images: { original: string; thumbnail: string }[];
}

export default function ProjectDetails() {
  const [images, setImages] = useState<
    { original: string; thumbnail: string }[]
  >([]);
  const location = useLocation();
  const project = location.state as Project;

  useEffect(() => {
    if (project && project.images) {
      setImages(project.images);
    }
  }, [project]);

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
              <p className="flex items-center gap-2">
                Visitar Repositorio - GitHub
                <img
                  src="https://res.cloudinary.com/dagqsktxx/image/upload/v1731621866/assets_portfolio/p2cziqxe1p0zzntlgcqu.svg"
                  alt="GitHub Icon"
                  className="w-6 h-6"
                />
              </p>
            </Button>
            <Button className="bg-blue-600 text-white font-medium rounded-full">
              <p className="flex items-center gap-2">
                Visitar Proyecto
                <GlobeAltIcon className="w-6 h-6" />
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
