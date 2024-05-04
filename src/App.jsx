import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Middle from './Components/MiddlePart/Middle'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
       <Navbar />
       <Middle/>
       <Footer/>
    </>
  )
}

export default App
