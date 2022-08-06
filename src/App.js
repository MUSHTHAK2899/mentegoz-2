import React from 'react'
import About from './components/About'
import Clinet from './components/Clinet'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Imagescroll from './components/ImageScroll'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Review from './components/Review'
import Services from './components/Services'
import Why from './components/Why'



const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto container font-mono text-white  bg-black'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Clinet/>
      <Imagescroll/>
      <Why/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App