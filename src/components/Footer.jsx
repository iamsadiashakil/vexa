import { EnvelopeIcon, LinkedinIcon, PhoneIcon } from './Icons';

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
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <a
                href="https://www.linkedin.com/in/sadia-shakil-557b3b136/"
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
              <a href="tel:+923024800946" className="hover:text-white flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (+92) 302 4800946
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
  )
}

export default Footer;
