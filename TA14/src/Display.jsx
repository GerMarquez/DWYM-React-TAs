import React,{ useContext } from 'react';
import { MyContext } from './App';

const Display =() => {
    const value = useContext(MyContext);

    return (
        <h1>{value}</h1> 
    );
};

export default Display;