import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";
import CompanyValues from "../components/CompanyValues";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

import khadijaImage from "../assets/khadija.jpeg";
import bilalImage from "../assets/bilalAkbar.jpg";
import sadiaImage from "../assets/sadia.jpeg";

import officeImage from "../assets/office.png";

const AboutUs = () => {
  return (
    <div className="content-container">
      <Header />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="hero-section bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-blue-100">
              Pioneering software solutions since 2024, we're committed to
              excellence and innovation.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionTitle subtitle="Our Journey" title="Company Story" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Startup Journey
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2024 by a team of passionate developers, our journey
                has just begun. We are a startup driven by big dreams and a
                strong desire to make an impact. Our mission is simple: create
                software that truly solves real-world problems.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow as a dedicated team, collaborating on
                innovative projects for our clients. As a young company, we
                remain deeply committed to our core values and to building
                solutions that matter.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <img
                src={officeImage}
                alt="Our office"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <CompanyValues />

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <SectionTitle
            subtitle="Meet The Team"
            title="Our Experts"
            description="Talented professionals dedicated to delivering exceptional results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TeamMember
              name="Bilal Akbar"
              role="CEO & Founder"
              bio="Visionary leader with 15+ years in business development."
              image={bilalImage}
            />
             <TeamMember
              name="Sadia Shakil"
              role="CTO & Co-Founder"
              bio="Technology expert specializing in scalable architechtures."
              image={sadiaImage}
            />
            <TeamMember
              name="Khadija Tahira"
              role="Developer"
              bio="Full-stack developer passionate about clean code."
              image={khadijaImage}
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
