import React from 'react';
import ProjectCard from './ProjectCard';

const projectList = [
  { name: 'Project 1', link: 'https://example1.com', thumbnail: 'thumbnail1.jpg' },
  { name: 'Project 2', link: 'https://example2.com', thumbnail: 'thumbnail2.jpg' }
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;