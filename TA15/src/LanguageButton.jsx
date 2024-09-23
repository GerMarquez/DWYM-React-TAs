import React, { useContext } from 'react';
import { LanguageContext } from './App';

const LanguageButton = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <button onClick={changeLanguage}>Switch Language</button>
  );
};

export default LanguageButton;