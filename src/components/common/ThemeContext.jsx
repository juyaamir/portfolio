import React, { createContext, useState } from 'react';

const light = {
  body: '#fff',
  text: '#000'
};
 
const dark = {
  body: '#000',
  text: '#fff'
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};