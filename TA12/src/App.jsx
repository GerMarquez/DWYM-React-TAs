import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display';

const MyContext = React.createContext('Karl');

function App() {

  return (
    <>
      <MyContext.Provider value="Karl the Dwarf">
        <Display/>
      </MyContext.Provider>
    </>
  )
}

export default {App,MyContext}
