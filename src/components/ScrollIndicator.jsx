import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  // State variable to track scroll position
  const [scrollTop, setScrollTop] = useState(0);

  // Event handler function for the 'scroll' event
  const onScroll = () => {
    // Get the current scroll position
    const winScroll = document.documentElement.scrollTop;

    // Calculate the total scrollable height
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculate the percentage of scroll progress
    const scrolled = (winScroll / height) * 100;

    // Update the scroll position state variable
    setScrollTop(scrolled);
  };

  // Register the 'scroll' event listener and return a cleanup function
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="indicatorWrapper" style={{ height: '4.5px' }}>
      <div
        className="indicatorMain"
        style={{
          height: '4.5px',
          width: `${scrollTop}%`,
          backgroundColor: '#2196f3',
        }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
