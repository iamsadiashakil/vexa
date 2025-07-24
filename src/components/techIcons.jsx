import { 
    SiSpringboot, 
    SiSpringsecurity, 
    SiPhp, 
    SiDocker, 
    SiMicrodotblog 
  } from 'react-icons/si';
  import { FaCode, FaMobileAlt } from 'react-icons/fa';
  
  // Map your stack names to icon components
  export const techIconMap = {
    Java: FaCode,                      // fallback for Java
    'Spring Boot': SiSpringboot,
    'Spring Security': SiSpringsecurity,
    'AWS EKS': FaCode,                 // fallback for AWS EKS
    PHP: SiPhp,
    Docker: SiDocker,
    Microservices: SiMicrodotblog,
    'C#': FaCode,                      // fallback for C#
    'Xamarin Android': FaMobileAlt,    // fallback for Xamarin
    'MVVM Cross': FaCode,              // fallback for MVVM Cross
  };