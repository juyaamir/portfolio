import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Home from '../sections/Home'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <Navbar />
      <main className='flex flex-col gap-14 w-2/3 m-auto'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout