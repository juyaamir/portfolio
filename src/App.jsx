import React from 'react';
import MainLayout from './components/layout/MainLayout';
import { ThemeProvider } from './components/common/ThemeContext';
const App = () => {
  return (
    <ThemeProvider>
        <MainLayout />
    </ThemeProvider>
  );
};

export default App;