import React, { useState, useEffect } from 'react';

type Project = {
  name: string;
  link: string;
  thumbnails: string[]; // Change to an array of images
  sample?: string; //leads to a working project
  about?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (hovered) {
      intervalId = setInterval(() => {
        const nextIndex = (currentThumbnailIndex + 1) % project.thumbnails.length;
        setCurrentThumbnailIndex(nextIndex);
      }, 1500); // Switch every 3 seconds
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [hovered, currentThumbnailIndex, project.thumbnails]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={project.sample} target="_blank" rel="noopener noreferrer">
    <div className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image">
        <img src={project.thumbnails[currentThumbnailIndex]} alt={project.name} />
      </div>
      <div className="content">
        <h2>{project.name}</h2>
        <p>{project.about}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
