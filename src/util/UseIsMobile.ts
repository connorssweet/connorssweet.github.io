import { useState, useEffect } from 'react';

export const MOBILE_WIDTH = 800;

export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
