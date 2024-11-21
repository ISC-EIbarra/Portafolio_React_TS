export type Technology = {
  id: number;
  name: string;
  source: string;
};

export type ProjectImage = {
  original: string;
  thumbnail: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string;
  core: string;
  status: string;
  images: ProjectImage[];
  github: string;
  web: string;
};
