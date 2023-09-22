import React from 'react';
import ProjectCard from './ProjectCard';

const projectList = [
  { 
    name: 'VanillaJS-FullStack-Blog',
    link: 'https://github.com/YuhanPizza/VanillaJS-FullStack-Blog',
    thumbnails: ['src/assets/Web1.PNG', 'src/assets/Web2.PNG', 'src/assets/Web3.PNG'],
    sample: 'https://fine-tan-goldfish-boot.cyclic.app/blog',
    about: 'Hey there, glad you stopped by! This isn\'t your run-of-the-mill, framework-heavy project. Nope, we\'re going back to basics with good old Vanilla JavaScript. If you\'re tired of all the npm install commands and just want to build something fun and essential, you\'re in the right place.'
  },
  { 
    name: 'Unity-JumpFrog-GameDev',
    link: 'https://github.com/YuhanPizza/Unity-JumpFrog-GameDev',
    thumbnails: ['src/assets/Frog1.PNG', 'src/assets/Frog2.PNG', 'src/assets/Frog3.PNG'],
    sample: 'https://yuhanpizza.github.io/JumpFrog-Game/',
    about:'Get ready for an exciting 2D platformer adventure! This game was lovingly crafted using Unity and coded in good ol\' C#. It offers three thrilling levels filled with challenges, hazards, and treasures. But that\'s not all—there\'s a cool start screen and a satisfying end screen to complete your gaming experience.'
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
