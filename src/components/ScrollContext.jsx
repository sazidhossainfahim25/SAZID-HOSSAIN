'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ScrollContext.Provider value={{ scrolled }}>{children}</ScrollContext.Provider>;
}

export const useScroll = () => useContext(ScrollContext);
