import React from 'react';
import { Link } from 'react-router-dom';
import { techIconMap } from './techIcons'; // make sure this path is correct

const ProjectCard = ({ title, description, image, link, techStack }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.slice(0, 4).map((tech, i) => {
            const Icon = techIconMap[tech];
            return (
              <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded flex items-center gap-1">
                {Icon && <Icon size={16} title={tech} className="inline mr-1" />}
                {tech}
              </span>
            );
          })}
          {techStack.length > 4 && (
            <span className="bg-gray-100 px-2 py-1 text-xs rounded">
              +{techStack.length - 4} more
            </span>
          )}
        </div>
        <div className="mt-auto">
          <Link
            to={link}
            className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 hover:text-white"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;