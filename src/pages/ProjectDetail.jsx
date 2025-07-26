import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data/projectsData';
import emailjs from 'emailjs-com';

const ProjectDetail = () => {
  const { projectSlug } = useParams();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const project = projectsData.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="content-container">
        <Header />
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Project Not Found</h1>
          <div className="mt-8 text-center">
            <Link to="/portfolio" className="text-blue-600 hover:text-blue-800">
              Return to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_t12ah9b', 'template_htgbh1p', formData, 'mJUuxZPP7Vcd89Y0f')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Error sending message. Please try again later.");
      });
  };

  return (
    <div className="content-container">
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero */}
        <div className="bg-blue-600 text-white py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-2/3">
                <p className="text-blue-100 mb-2">Project Case Study</p>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/4 mt-8 md:mt-0">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-xl max-h-64 w-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Problem */}
          <section className="mb-16">
            <SectionTitle subtitle="The Challenge" title="Problem" description="" />
            <div className="mt-8 prose prose-lg max-w-none">
              <p>{project.problem}</p>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <SectionTitle subtitle="Our Approach" title="Solution" description="" />
            <div className="mt-8 prose prose-lg max-w-none">
              <p>{project.solution}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <SectionTitle subtitle="Technologies Used" title="Tech Stack" description="" />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-lg font-medium text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <SectionTitle
              subtitle="Interested in similar services?"
              title="Get This Service"
              description="Fill out the form below and we'll get back to you to discuss your project needs."
            />
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Back Link */}
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition-colors duration-300"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
