import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue ('');
  };

  return (
    <>
      <h1>Lista</h1>
      <input
        type = 'text'
        value = {inputValue} 
        placeholder="Add a new item"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <Button handleClick={addItem}>Add to list</Button>
      <ul>
      {items.map((item) => (<li>{item}</li>))}
      </ul>
    </>
  )
}

export default App
