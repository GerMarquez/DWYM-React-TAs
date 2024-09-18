import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button';

function App() {
  const [items, setItems] = useState([]);
  const [itemInputValue, setItemInputValue] = useState('');
  const [removeIndexInputValue, setRemoveIndexInputValue] = useState('');
  const [editIndexInputValue, setEditIndexInputValue] = useState('');
  const [editPayloadInputValue, setEditPayloadInputValue] = useState('');

  const addItem = () => {
    setItems([...items, itemInputValue]);
    setItemInputValue ('');
  };

  const removeItem = () => {
    const removeIndex = parseInt(removeIndexInputValue) - 1;
    if (!isNaN(removeIndex) && removeIndex >= 0 && removeIndex < items.length){
      const newItems = items.filter((_, i) => i !== removeIndex);
      setItems(newItems);
    }
    setRemoveIndexInputValue('');
  };

  const editItem = () => {
    const editIndex = parseInt(editIndexInputValue) - 1;
    if (!isNaN(editIndex) && editIndex >= 0 && editIndex < items.length){
      const newItems = [... items];
      newItems.splice(editIndex,1,editPayloadInputValue);
      setItems(newItems);
    }
    setEditIndexInputValue('');
    setEditPayloadInputValue('');
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
        value = {removeIndexInputValue} 
        placeholder= "Index to remove"
        onChange={(e) => setRemoveIndexInputValue(e.target.value)}
      ></input>

      <Button handleClick={removeItem}>Remove from list</Button>

      <input
        type = 'number'
        value = {editIndexInputValue} 
        placeholder= "Index to edit"
        onChange={(e) => setEditIndexInputValue(e.target.value)}
      ></input>

      <input
        type = 'text'
        value = {editPayloadInputValue} 
        placeholder="New value for item"
        onChange={(e) => setEditPayloadInputValue(e.target.value)}
      ></input>

      <Button handleClick={editItem}>Edit item in list</Button>

      <ul>
      {items.map((item) => (<li>{item}</li>))}
      </ul>
    </>
  )
}

export default App
