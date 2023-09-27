import React from 'react';
import ProjectCard from './ProjectCard';
import { useTheme } from '../ThemeContext';

const projectList = [
  { 
    name: 'VanillaJS-FullStack-Blog',
    link: 'https://github.com/YuhanPizza/VanillaJS-FullStack-Blog',
    thumbnails: ['Web1.PNG', 'Web2.PNG', 'Web3.PNG'],
    sample: 'https://fine-tan-goldfish-boot.cyclic.app/blog',
    about: 'Hey there, glad you stopped by! This isn\'t your run-of-the-mill, framework-heavy project. Nope, we\'re going back to basics with good old Vanilla JavaScript. If you\'re tired of all the npm install commands and just want to build something fun and essential, you\'re in the right place.'
  },
  { 
    name: 'Unity-JumpFrog-GameDev',
    link: 'https://github.com/YuhanPizza/Unity-JumpFrog-GameDev',
    thumbnails: ['Frog1.PNG', 'Frog2.PNG', 'Frog3.PNG'],
    sample: 'https://yuhanpizza.github.io/JumpFrog-Game/',
    about:'Get ready for an exciting 2D platformer adventure! This game was lovingly crafted using Unity and coded in good ol\' C#. It offers three thrilling levels filled with challenges, hazards, and treasures. But that\'s not all—there\'s a cool start screen and a satisfying end screen to complete your gaming experience.'
  }
];

const Projects: React.FC = () => {
  const {isDarkMode} = useTheme();
  const bodyStyle = {
    backgroundColor: isDarkMode ? 'darkolivegreen' : '#333', // Change colors as needed
  };
  return (
    <div>
    <style>
      {`body{
        background-color:${bodyStyle.backgroundColor}
      }`}
    </style>
    <div>
      <h1 style={{textAlign: 'center', color:'white', fontWeight: 'bold'}}>Projects</h1>
      <div>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
