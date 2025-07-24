import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import LayoutManager from './components/LayoutManager';

// Direct imports (no lazy loading)
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';


function App() {
  return (
    <Router>
      <LayoutManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectSlug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutManager>
    </Router>
  );
}

export default App;