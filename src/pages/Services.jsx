import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceDetail from '../components/ServiceDetail';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { CodeBracketIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '../components/Icons';

const Services = () => {
  return (
    <div className="content-container">
      <Header />
      
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive software solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionTitle
            subtitle="What We Offer"
            title="Expert Software Solutions"
            description="We provide end-to-end services from concept to deployment and beyond."
          />
          
          <div className="space-y-12">
            <ServiceDetail
              title="Java Spring Boot API Development"
              shortDescription="Robust, scalable APIs using Java Spring Boot"
              longDescription="Design and development of secure, high-availability RESTful APIs and microservices architectures using Java Spring Boot. Includes Spring Security integration, requirements analysis, and CI/CD deployment to AWS EKS."
              features={[
                "RESTful API & microservice architecture",
                "Spring Security & authentication",
                "CI/CD & AWS EKS deployment",
                "Legacy system integration",
                "Performance tuning & troubleshooting"
              ]}
              technologies={["Java", "Spring Boot", "Spring Security", "AWS EKS", "Docker", "CI/CD"]}
              icon={CodeBracketIcon}
            />

            {/* <ServiceDetail
              title="Web Application Development"
              shortDescription="Modern, responsive web applications for your business"
              longDescription="Development of intuitive, responsive web applications using JavaScript frameworks, classic web stacks, or PHP. Includes integration with backend APIs, database design, and optimization."
              features={[
                "React, Angular, or classic web stack frontends",
                "Backend API integration (Java, PHP, .NET, etc.)",
                "Database design and optimization",
                "Custom architecture and business logic",
                "Performance tuning"
              ]}
              technologies={["React", "Angular", "PHP", "JSP", "MySQL", "HTML", "CSS"]}
              icon={GlobeAltIcon}
            /> */}

            <ServiceDetail
              title="Mobile App Development (Android/Xamarin)"
              shortDescription="Cross-platform and native Android mobile applications"
              longDescription="Cross-platform and native Android mobile app development with Xamarin, C#, and Android Studio. Includes experience with IoT/embedded integrations, camera, sensors, notifications, and app store deployment."
              features={[
                "Cross-platform Xamarin Android apps",
                "Native Android development (Android Studio)",
                "IoT/embedded device integration",
                "Push notifications & analytics",
                "App store publishing support"
              ]}
              technologies={["C#", "Xamarin", "Android Studio", "Embedded C", "MVVM Cross"]}
              icon={DevicePhoneMobileIcon}
            />

            <ServiceDetail
              title="Legacy System Maintenance & Migration"
              shortDescription="Bug fixing, modernization, and migration for legacy applications"
              longDescription="Expertise in maintaining and upgrading legacy systems, including PHP and .NET applications. Services include bug fixing, performance improvements, and migration to modern cloud architectures."
              features={[
                "Legacy PHP/.NET application maintenance",
                "Bug fixing & troubleshooting",
                "Modernization & migration to cloud",
                "Database migrations",
                "Documentation & support"
              ]}
              technologies={["PHP", ".NET", "Java", "AWS", "Database Tools"]}
              icon={CodeBracketIcon}
            />

            <ServiceDetail
              title="DevOps"
              shortDescription="Embedded systems, device integrations, and automation"
              longDescription="Design and prototyping of embedded systems, automation solutions, and IoT device integration. Example projects include smart strollers, automated appliances, and microcontroller programming."
              features={[
                "Embedded system prototyping (TM4C123GXL, PIC16F, etc.)",
                "IoT device connectivity",
                "Firmware development in Embedded C",
                "Android app integration with hardware",
                "Automation & control systems"
              ]}
              technologies={["Embedded C", "Energia IDE", "Code Composer Studio", "Android Studio"]}
              icon={DevicePhoneMobileIcon}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you bring your ideas to life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Get a Free Consultation
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;