import React,{useContext} from 'react';
import {MyContext} from './App';

const Display =() => {
    const value = useContext(MyContext);

    return (
        <h1>{value.name}</h1> 
    );
};

export default Display;