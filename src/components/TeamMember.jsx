import { EnvelopeIcon, LinkedinIcon, GithubIcon } from './Icons'; // Create these icon components

const TeamMember = ({ name, role, bio, image, socials }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow max-w-sm w-full mx-auto">
      {/* Member Photo - Larger image portion */}
      <div className="h-80 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Member Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          {socials.email && (
            <a
              href={`mailto:${socials.email}`}
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label={`Email ${name}`}
            >
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Default props for optional fields
TeamMember.defaultProps = {
  socials: {
    email: '',
    linkedin: '',
    github: ''
  }
};

export default TeamMember;