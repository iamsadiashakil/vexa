import { useEffect } from 'react';

// This component ensures the body padding gets updated 
// even if a user navigates directly to a page without scrolling
const LayoutManager = ({ children }) => {
  useEffect(() => {
    // Update body padding based on header height
    const updateBodyPadding = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
      }
    };

    // Update immediately and on resize
    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, []);

  return (
    <div className="app-container">
      {children}
    </div>
  );
};

export default LayoutManager;