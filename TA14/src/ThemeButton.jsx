import {useContext, useState} from 'react'
import {ThemeContext} from './App';

const ThemeButton =() => {
    const {themeToggle} = useContext(ThemeContext);
    return (
        <button onClick={themeToggle}> Switch Theme </button>
    );
};

export default ThemeButton;