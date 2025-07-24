import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projectsData.map(project => (
      <ProjectCard
        key={project.id}
        {...project}
      />
    ))}
  </div>
);

export default ProjectList;