import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display';
import ThemeButton from './ThemeButton';

export const MyContext = React.createContext('Karl');
export const ThemeContext = React.createContext();

function App() {
  const [selectedTheme, setSelectedTheme] = useState ('light');

  const themeToggle = () => {setSelectedTheme((prev)=>(prev === 'light'?'dark':'light'))}

  return (
    <>
      <MyContext.Provider value="Karl the Dwarf">
        <ThemeContext.Provider value = {{selectedTheme,themeToggle}}>
          <div className = {selectedTheme}>
            <Display/>
            <ThemeButton/>
          </div>
        </ThemeContext.Provider>
      </MyContext.Provider>
    </>
  )
}

export default App