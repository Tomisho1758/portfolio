import { useState } from 'react'
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />}/>
    </Routes>
    </Router>
  
    </>
  )
}

export default App
