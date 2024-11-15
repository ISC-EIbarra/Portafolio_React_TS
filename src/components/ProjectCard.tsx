import { Link } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';

type ProjectCardProps = {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string;
    core: string;
    status: string;
    images: { original: string; thumbnail: string }[];
    github: string;
    web: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl =
    project.core === 'React'
      ? 'https://res.cloudinary.com/dagqsktxx/image/upload/v1730495713/assets_portfolio/bln2b1mkmxfhshatb2l1.svg'
      : project.core === 'Vue'
      ? 'https://res.cloudinary.com/dagqsktxx/image/upload/v1731453759/assets_portfolio/cu7ac543qsfv0kcl8m2e.svg'
      : 'https://example.com/default-image.jpg';
  return (
    <Card>
      <CardHeader className="flex gap-4">
        <div>
          <Image
            isBlurred
            isZoomed
            width={500}
            height={250}
            alt={`${project.name} cover image`}
            src={project.image}
          />
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 px-4 py-2">
        <div className="flex gap-4 items-center">
          <Image
            className="transition-transform duration-500 hover:rotate-180"
            alt={project.core}
            height={35}
            width={35}
            radius="sm"
            src={imageUrl}
          />
          <div>
            <p className="text-xl font-medium text-blue-900 text-wrap">
              {project.name}
            </p>
          </div>
        </div>
        <div>
          <p className="font-medium text-slate-800 line-clamp-3">
            {project.description}
          </p>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center px-4 py-2">
        <Link
          to={`/projects/${project.id}`}
          state={project}
          className="rounded-full text-white bg-blue-600 px-4 py-2 cursor-pointer text-base font-medium hover:bg-blue-800 transition-colors"
        >
          <div className="flex gap-2 items-center">
            <p>Ver proyecto</p>
            <ArrowRightCircleIcon className="w-6 h-6" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}
