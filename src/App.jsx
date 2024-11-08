import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Interest from './Components/Interest/Interest'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Interest/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
