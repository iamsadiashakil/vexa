import { EnvelopeIcon, LinkedinIcon, PhoneIcon } from './Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Vexa</h3>
            <p className="text-gray-400">
              Building innovative software solutions to help your business grow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <a
                href="https://www.linkedin.com/company/vexa-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center underline"
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                LinkedIn 
              </a>
              <br />
              <a href="mailto:vexa.information@gmail.com" className="hover:text-white flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                vexa.information@gmail.com
              </a>
              <br />
              <a href="tel:+923075410858" className="hover:text-white flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (+92) 307 5410858
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
