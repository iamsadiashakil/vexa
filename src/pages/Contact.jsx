import React, { useState } from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_t12ah9b';
const TEMPLATE_ID = 'template_htgbh1p';
const PUBLIC_KEY = 'mJUuxZPP7Vcd89Y0f';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    // You can pass form fields as variables to your EmailJS template
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          setSent(true);
          setForm({ name: '', email: '', message: '' });
        },
        (err) => {
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="content-container">
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Me"
            description="Feel free to reach out for collaborations or just a friendly hello!"
          />
          {sent ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6">
              Thank you for reaching out! I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                  rows={5}
                />
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
          <div className="mt-12 text-center text-gray-600">
            Or email directly: <a href="mailto:vexa.information@gmail.com" className="text-blue-600 underline">vexa.information@gmail.com</a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;