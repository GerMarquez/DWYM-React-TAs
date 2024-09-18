import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button';

function App() {
  const [items, setItems] = useState([]);
  const [itemInputValue, setItemInputValue] = useState('');
  const [indexInputValue, setIndexInputValue] = useState('');

  const addItem = () => {
    setItems([...items, itemInputValue]);
    setItemInputValue ('');
  };

  const removeItem = () => {
    const removeIndex = parseInt(indexInputValue) - 1;
    if (!isNaN(removeIndex) && removeIndex >= 0 && removeIndex < items.length){
      const newItems = items.filter((_, i) => i !== removeIndex);
      setItems(newItems);
    }
    setIndexInputValue('');
  };

  return (
    <>
      <h1>Lista</h1>

      <input
        type = 'text'
        value = {itemInputValue} 
        placeholder="Add a new item"
        onChange={(e) => setItemInputValue(e.target.value)}
      ></input>

      <Button handleClick={addItem}>Add to list</Button>

      <input
        type = 'number'
        value = {indexInputValue} 
        placeholder= "Index to remove"
        onChange={(e) => setIndexInputValue(e.target.value)}
      ></input>

      <Button handleClick={removeItem}>Remove from list</Button>

      <ul>
      {items.map((item) => (<li>{item}</li>))}
      </ul>
    </>
  )
}

export default App
