import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="product/:id" element={<Product />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
