import { useState } from 'react'
import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
    setCount(count => count + 1);
    document.title = `Counter: ${count}`;
  }, 1000);

  return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App
