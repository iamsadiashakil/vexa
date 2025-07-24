import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

// Updated projects data based on your real work history
const projects = [
  {
    title: 'Revinate Applications',
    description:
      'Development of RESTful API solutions for the Revinate platform, including subscription management and marketing tools. Worked on new features, bug fixing in legacy PHP systems, and modern AWS EKS deployments.',
    image: '/assets/project-revinate.jpg', // Replace with actual image if available
    link: 'http://your-ecommerce-demo.com/', // Add demo or repo link if available
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'AWS EKS', 'PHP', 'Docker'],
  },
  {
    title: 'SECP High-Availability APIs',
    description:
      'Designed and built highly-available and secure API solutions in Java Spring Boot for the Securities & Exchange Commission of Pakistan (SECP). Focused on robust, scalable backend development.',
    image: '/assets/project-secp.jpg', // Replace with actual image if available
    link: 'http://your-ecommerce-demo.com/', // Add demo or repo link if available
    techStack: ['Java', 'Spring Boot', 'Spring Security'],
  },
  {
    title: 'Walmart Clinical & Prescriber Platforms',
    description:
      'Collaborated on multiple projects for Walmart, including Clinical Packages (Compound Drugs) and RDM Carbon Prescriber. Developed and maintained Spring Boot APIs for healthcare systems, ensuring high availability and security.',
    image: '/assets/project-walmart.jpg', // Replace with actual image if available
    link: 'http://your-ecommerce-demo.com/', // Add demo or repo link if available
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Microservices'],
  },
  {
    title: 'PIE',
    description:
      'Developed high-availability API solutions for the PIE project, targeting the Middle East healthcare market. Delivered robust, scalable backend services in Java Spring Boot.',
    image: '/assets/project-pie.jpg', // Replace with actual image if available
    link: 'http://your-ecommerce-demo.com/', // Add demo or repo link if available
    techStack: ['Java', 'Spring Boot', 'Spring Security'],
  },
  {
    title: 'Confiz Core Product & NHP – Mi Heal Team App',
    description:
      'Built new features for the Confiz Core product and developed the NHP – Mi Heal Team mobile application using C# and Xamarin Android, focusing on robust functionality and user experience.',
    image: '/assets/project-confiz-nhp.jpg', // Replace with actual image if available
    link: 'http://your-ecommerce-demo.com/', // Add demo or repo link if available
    techStack: ['C#', 'Xamarin Android', 'MVVM Cross'],
  },
];

const Portfolio = () => {
  return (
    <div className="content-container">
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Our Works"
            title="Portfolio"
            description="A selection of projects demonstrating my skills and experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={`/project/${project.slug}`}
                techStack={project.techStack}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;