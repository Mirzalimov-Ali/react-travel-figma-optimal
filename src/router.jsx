import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Header from './components/header/header'

function RouterComponent() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default RouterComponent
