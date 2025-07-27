import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceDetail from "../components/ServiceDetail";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CodeBracketIcon,
  CloudIcon,
  DatabaseIcon,
  MagnifyingGlassIcon,
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
              title="Server-Side Development"
              shortDescription="Robust and scalable RESTful APIs using Java SpringBoot (Spring Data JPA, Spring Security, Apache Kafka) and C# (MVVM Cross)"
              longDescription="Design and development of robust backend systems using Java Spring Boot and C#. Leverages technologies like Spring Data JPA, Spring Security, and Apache Kafka to build high-performance, scalable APIs with real-time capabilities and strong security features."
              features={[
                "RESTful APIs & microservices architecture",
                "Spring Data JPA for efficient ORM",
                "Spring Security with authentication/authorization",
                "Apache Kafka for real-time, event-driven communication",
                "High availability and fault tolerance",
                "Clean, modular backend codebase",
              ]}
              technologies={[
                "Java",
                "Spring Boot",
                "Spring Data JPA",
                "Spring Security",
                "Apache Kafka",
                "C#",
                "MVVM Cross",
              ]}
              icon={CodeBracketIcon}
            />

            <ServiceDetail
              title="Client-Side Development"
              shortDescription="Native Android apps in Java, cross-platform mobile apps using Xamarin (C#), and responsive web interfaces"
              longDescription="Development of mobile and web interfaces using Java for Android, Xamarin with C# for cross-platform solutions, and standard web technologies (HTML, CSS). Interfaces are responsive, user-friendly, and optimized for performance and UX."
              features={[
                "Native Android development in Java",
                "Cross-platform mobile development with Xamarin (C#)",
                "MVVM Cross architecture pattern",
                "Responsive design using HTML/CSS",
                "Device feature integration (camera, GPS, etc.)",
              ]}
              technologies={[
                "Java",
                "Android",
                "Xamarin",
                "C#",
                "HTML",
                "CSS",
              ]}
              icon={CodeBracketIcon}
            />

            <ServiceDetail
              title="Cloud & DevOps"
              shortDescription="Deployment automation and container orchestration with Docker and AWS EKS"
              longDescription="End-to-end DevOps support including containerized deployment with Docker and orchestration using AWS Elastic Kubernetes Service (EKS). Enables scalable, fault-tolerant deployments in cloud environments with full CI/CD and monitoring integration."
              features={[
                "Docker-based containerization",
                "Kubernetes orchestration using AWS EKS",
                "CI/CD pipeline integration",
                "Scalable cloud infrastructure setup",
                "Infrastructure as Code (IaC)",
              ]}
              technologies={[
                "Docker",
                "AWS EKS",
                "CI/CD",
                "Kubernetes",
              ]}
              icon={CloudIcon}
            />

            <ServiceDetail
              title="Databases"
              shortDescription="Hands-on experience with relational and in-memory databases"
              longDescription="Database design, optimization, and integration experience across multiple platforms including PostgreSQL, Redis, MSSQL Server, MySQL, and SQLite. Covers schema design, normalization, and caching for high-performance data systems."
              features={[
                "Relational and in-memory databases",
                "PostgreSQL, MySQL, MSSQL Server, SQLite",
                "Redis for caching and real-time access",
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
              icon={DatabaseIcon}
            />

            <ServiceDetail
              title="Monitoring & Logging"
              shortDescription="Application observability using ELK Stack, Rollbar, and DataDog"
              longDescription="Monitoring and logging services using ELK Stack, Rollbar, and DataDog. Enables robust tracking, alerting, and log aggregation across microservices and APIs, supporting faster debugging and performance optimization."
              features={[
                "Centralized logging with ELK Stack",
                "Real-time error tracking using Rollbar",
                "Performance monitoring with DataDog",
                "Log analysis and reporting",
                "System health dashboards and alerts",
              ]}
              technologies={[
                "ELK Stack",
                "Rollbar",
                "DataDog",
              ]}
              icon={MagnifyingGlassIcon}
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
