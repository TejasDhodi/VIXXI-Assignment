import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 1024) => {

  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [breakpoint]); 

  return isMobile;
};

export default useIsMobile;
