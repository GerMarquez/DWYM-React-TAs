import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'


function App() {
  const [count, setCount] = useState(0)

  const aumentar = () => setCount(count + 1);
  const disminuir = () => setCount(count - 1);

  return (
    <>
      <h1>{count}</h1>
      <Button handleClick={aumentar}>Aumentar</Button>
      <Button handleClick={disminuir}>Disminuir</Button>
    </>
  )
}

export default App
