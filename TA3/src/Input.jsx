import React, { useState } from 'react';

const Input = ({ onChange }) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value);
    };
  
    return (
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Enter text here"
      />
    );
  };
  

export default Input;