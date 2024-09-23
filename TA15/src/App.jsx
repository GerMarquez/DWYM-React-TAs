import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';
import ThemeDisplay from './ThemeDisplay';
import LanguageDisplay from './LanguageDisplay';

const MyContext = React.createContext('Karl');
const ThemeContext = React.createContext();
const LanguageContext = React.createContext();

function App() {
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const themeToggle = () => {
    setSelectedTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = () => {
    setSelectedLanguage((prev) => (prev === 'English' ? 'Spanish' : 'English'));
  };

  return (
    <MyContext.Provider value="Karl the Dwarf">
      <ThemeContext.Provider value={{ selectedTheme, themeToggle }}>
        <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
          <div className={selectedTheme}>
            <Display />
            <ThemeDisplay />
            <LanguageDisplay />
            <ThemeButton />
            <LanguageButton />
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext, ThemeContext, LanguageContext };