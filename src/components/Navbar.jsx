import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo4.png'; // Your logo file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate header height to add as padding to body
  useEffect(() => {
    const updateBodyPadding = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
      }
    };

    // Update on mount, window resize, and when mobile menu opens/closes
    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, [isOpen]); // Re-run when mobile menu opens/closes, as that changes header height

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="My Software House"
              className="h-16 sm:h-20" // Larger logo
              style={{ width: 'auto', maxHeight: '80px' }} // Increased maxHeight
            />
          </Link>

          {/* Desktop and Tablet Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center justify-end">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === link.path 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-1 lg:ml-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap
                focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ color: 'white' }} // Ensures text stays white, including on hover
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-center font-medium
              hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
              style={{ color: 'white' }} // Ensures text stays white, including on hover
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;