import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 1024) => {
  // Initial state: undefined to indicate that the value isn't available yet
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Set initial state when the component mounts
      handleResize();

      // Add event listener to update state on window resize
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [breakpoint]); // Re-run effect if breakpoint changes

  // Return `isMobile` state, which will be undefined initially
  return isMobile;
};

export default useIsMobile;
