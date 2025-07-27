import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceDetail from "../components/ServiceDetail";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
} from "../components/Icons";

const Services = () => {
  return (
    <div className="content-container">
      <Header />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
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
              shortDescription="Robust and scalable RESTful APIs using Spring Boot"
              longDescription="Design and development of scalable RESTful APIs and microservices using Java Spring Boot. Utilizes Spring Data JPA and Spring Security for secure, high-performance systems. Ideal for enterprise-grade backend applications with strong authentication and data layer integrity."
              features={[
                "RESTful APIs & microservices architecture",
                "Spring Data JPA for efficient ORM",
                "Spring Security with authentication/authorization",
                "Clean, modular code structure",
                "Exception handling and async support",
              ]}
              technologies={[
                "Java",
                "Spring Boot",
                "Spring Data JPA",
                "Spring Security",
                "Apache Kafka"
              ]}
              icon={CodeBracketIcon}
            />

            <ServiceDetail
              title="Mobile App Development (Android/Xamarin)"
              shortDescription="Native and cross-platform Android apps"
              longDescription="Development of mobile apps using Xamarin (C#) for cross-platform solutions and Java for native Android applications. Apps are built with clean architecture patterns like MVVM Cross and integrate seamlessly with APIs and native device features."
              features={[
                "Cross-platform apps with Xamarin (C#)",
                "Native Android apps using Java",
                "MVVM Cross architecture",
                "Integration with device features (camera, sensors, etc.)",
                "App deployment and store publishing",
              ]}
              technologies={[
                "Xamarin",
                "C#",
                "MVVM Cross",
                "Android (Java)",
                "Android Studio",
                "SQLite",
              ]}
              icon={DevicePhoneMobileIcon}
            />

            <ServiceDetail
              title="Database Management & Integration"
              shortDescription="Robust, scalable, and optimized data storage solutions"
              longDescription="Design and management of relational and in-memory databases for both transactional and analytical applications. Includes schema design, query optimization, data migration, and seamless integration with backend services."
              features={[
                "Relational and in-memory database support",
                "PostgreSQL, MySQL, MSSQL Server, SQLite",
                "Redis for caching and real-time data access",
                "Schema design and normalization",
                "Query optimization and performance tuning",
              ]}
              technologies={[
                "PostgreSQL",
                "MySQL",
                "MSSQL Server",
                "SQLite",
                "Redis",
              ]}
              icon={CodeBracketIcon}
            />

            <ServiceDetail
              title="Cloud & DevOps"
              shortDescription="Deployment automation, container orchestration, and observability"
              longDescription="DevOps services including CI/CD pipelines, containerization using Docker, and cloud orchestration on AWS EKS. Also includes implementation of observability tools like ELK, Rollbar, and DataDog for system monitoring, logging, and performance insights."
              features={[
                "Containerization with Docker",
                "Kubernetes orchestration on AWS EKS",
                "CI/CD pipeline setup and maintenance",
                "Infrastructure monitoring and alerting",
                "Log aggregation and traceability with ELK, Rollbar, DataDog",
              ]}
              technologies={[
                "Docker",
                "AWS EKS",
                "CI/CD",
                "ELK",
                "Rollbar",
                "DataDog",
              ]}
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
