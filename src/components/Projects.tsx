import React from 'react';
import ProjectCard from './ProjectCard';

const projectList = [
  { 
    name: 'VanillaJS-FullStack-Blog',
    link: 'https://github.com/YuhanPizza/VanillaJS-FullStack-Blog',
    thumbnails: ['src/assets/Web1.PNG', 'src/assets/Web2.PNG', 'src/assets/Web3.PNG'],
    sample: 'https://fine-tan-goldfish-boot.cyclic.app/blog',
    about: 'VanillaJS-FullStack-Blog is a web application that emphasizes simplicity and uses Vanilla JavaScript for both the frontend and backend.'
  },
  { 
    name: 'Project 2',
    link: 'https://example2.com',
    thumbnails: ['thumbnail2_1.jpg', 'thumbnail2_2.jpg', 'thumbnail2_3.jpg'],
    sample: 'https://example2.com'
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center', color:'white', fontWeight: 'bold'}}>Projects</h1>
      <div>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
