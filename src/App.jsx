import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import FAQs from './Pages/FAQs'
import Services from './Pages/Services'
import Feedback from './Pages/Feedback'
import Footer from './Pages/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <FAQs />
      <Services />
      <Feedback />
      <Footer />
    </>
  )
}

export default App
