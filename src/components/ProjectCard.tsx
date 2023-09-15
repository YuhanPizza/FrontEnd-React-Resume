import React from 'react';

type Project = {
  name: string;
  link: string;
  thumbnail: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div onClick={() => window.open(project.link, "_blank")}>
      <img src={project.thumbnail} alt={project.name} />
      <h2>{project.name}</h2>
    </div>
  );
};

export default ProjectCard;