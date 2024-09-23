import React, { useContext } from 'react';
import { LanguageContext } from './App';

const LanguageDisplay = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <h2>Current Language: {selectedLanguage}</h2>
  );
};

export default LanguageDisplay;