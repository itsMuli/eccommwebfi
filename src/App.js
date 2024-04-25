import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div>
        <>
        <Navbar/>
        <HomePage/>
        <Footer/>
        </>
    </div>
  )
}

export default App