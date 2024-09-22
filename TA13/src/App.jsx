import React from 'react';
import { useState } from 'react'
import './App.css'
import Display from './Display';
import Input from './Input';

export const MyContext = React.createContext('Karl');

function App() {
  const [name, setName] = useState('Karl the Dwarf');

  return (
    <>
      <MyContext.Provider value={{name, setName}}>
        <Input/>
        <Display/>
      </MyContext.Provider>
    </>
  )
}

export default App
