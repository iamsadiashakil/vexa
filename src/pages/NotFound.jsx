import { Link } from 'react-router-dom';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="content-container">
      <Header />
      
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Animated 404 Number */}
            <div className="text-[120px] sm:text-[180px] font-bold text-blue-600 mb-4 leading-none">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>4</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>0</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>4</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Go to Homepage
              </Link>
              
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
            
            {/* Tech-themed decorative elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-50">
              <div className="w-12 h-12 rounded-full bg-blue-100"></div>
              <div className="w-8 h-8 rounded-full bg-blue-200 self-end"></div>
              <div className="w-16 h-16 rounded-lg bg-blue-100 rotate-45"></div>
              <div className="w-10 h-10 rounded-full bg-blue-200 self-start"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;