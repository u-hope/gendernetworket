import React, { useEffect, useRef } from 'react';

const Parallax = ({ className, speed }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const y = (window.pageYOffset * speed) / 100;
        element.style.transform = `translateY(${y}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {/* Your image element */}
    </div>
  );
};

export default Parallax;