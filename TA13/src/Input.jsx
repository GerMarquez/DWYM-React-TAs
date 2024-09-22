import React, {useContext} from 'react';
import {MyContext} from './App';

const Input = () =>{
    const {name, setName} = useContext(MyContext);

    const handleChange = (event) =>{
        setName(event.target.value);
    };

    return (
        <input
            type = "text"
            value = {name}
            onChange={handleChange}
            placeholder = "Nombre"
        />
    );
} 

export default Input;