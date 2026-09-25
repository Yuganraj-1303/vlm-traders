import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const DOMAINS = {
  ALL: 'all',
  ELECTRICAL: 'electrical',
  PUMPS: 'pumps',
  CCTV: 'cctv'
};

export const ThemeProvider = ({ children }) => {
  const [activeDomain, setActiveDomain] = useState(DOMAINS.ALL);

  useEffect(() => {
    // Apply theme class to body for global CSS variables
    document.body.className = ''; // clear existing
    document.body.classList.add(`theme-${activeDomain}`);
  }, [activeDomain]);

  return (
    <ThemeContext.Provider value={{ activeDomain, setActiveDomain, DOMAINS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
