import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

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
