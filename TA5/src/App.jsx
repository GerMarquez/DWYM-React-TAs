import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)
  const [visibility, setVisibility] = useState(true);

  const aumentar = () => setCount(count + 1);
  const disminuir = () => setCount(count - 1);

  const toggleVisibility = () => setVisibility (!visibility);

  return (
    <>
      {visibility && <h1>{count}</h1>}
      <Button handleClick={aumentar}>Aumentar</Button>
      <Button handleClick={disminuir}>Disminuir</Button>
      <Button handleClick={toggleVisibility}>Visibilidad</Button>
    </>
  )
}

export default App
