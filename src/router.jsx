import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function RouterComponent() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default RouterComponent
