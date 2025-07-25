import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ButtonComp";
import SectionTitle from "../components/SectionTitle";
import HeroImage from "../assets/hero-image.jpg";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  // Animation for hero section
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="content-container">
      <Header />

      <div className="w-full bg-gray-50 overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 fade-in space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building Digital{" "}
                  <span className="text-blue-600">Excellence</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                  We craft innovative software solutions that drive business
                  growth and digital transformation.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    className="w-full sm:w-auto"
                    onClick={() => navigate("/services")}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => navigate("/about")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 fade-in mt-8 md:mt-0">
                <img
                  src={HeroImage}
                  alt="Software development illustration"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="w-full bg-white py-12 sm:py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionTitle
              subtitle="What We Offer"
              title="Our Services"
              description="We provide comprehensive software solutions tailored to your business needs."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-blue-600 py-12 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100">
                Let's discuss how we can help you achieve your digital goals.
              </p>
              <Button
                variant="accent"
                className="text-base sm:text-lg w-full sm:w-auto"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

// Sample services data - you can move this to a separate file
const services = [
  {
    id: 1,
    title: "API & Backend Development",
    description:
      "High-availability and scalable RESTful APIs in Java SpringBoot and C#, deployed on AWS EKS.",
    icon: "🔗",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for Android using Xamarin and C#.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Legacy System Maintenance",
    description: "Bug fixing and support for PHP and older platforms.",
    icon: "🐞",
  },
  {
    id: 4,
    title: "Web Solutions",
    description:
      "Frontend and backend web development with HTML, CSS, JSP, and MySQL.",
    icon: "💻",
  },
  {
    "id": 5,
    "title": "DevOps",
    "description": "CI/CD automation and infrastructure setup.",
    "icon": "⚙️"
  },
  {
    "id": 6,
    "title": "Docker & AWS EKS (Elastic Kubernetes Service)",
    "description": "Container orchestration and team mentoring.",
    "icon": "🐳"
  }  
];

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        {service.description}
      </p>
    </div>
  );
};

export default Home;
