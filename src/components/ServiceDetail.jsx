import { useState } from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ 
  title, 
  shortDescription, 
  longDescription, 
  features = [], 
  technologies = [], 
  icon: Icon 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Service Header */}
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{shortDescription}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-600">
          {isExpanded ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Features */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Details */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Service Details</h4>
              <p className="text-gray-700 mb-4">{longDescription}</p>
              
              {technologies.length > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Technologies We Use</h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-700 border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get This Service
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
