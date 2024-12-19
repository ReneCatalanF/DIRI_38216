import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import About, { FACT, Referencias } from './view/Help'
import NoMatch from './view/NotMatch';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/help" element={<About/>}>
      <Route path="fact" element={<FACT/>} />
      <Route path="referencias" element={<Referencias/>} />
    </Route>
    <Route path="*" element={<NoMatch/>}/>
    {/* Resto de rutas */}
    </Routes>
    </>
    )
}

export default App
