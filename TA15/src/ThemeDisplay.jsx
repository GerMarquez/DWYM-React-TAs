import React, { useContext } from 'react';
import { ThemeContext } from './App';

const ThemeDisplay = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <h2>Current Theme: {selectedTheme}</h2>
  );
};

export default ThemeDisplay;