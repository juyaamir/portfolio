import React, { useContext } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Home from '../sections/Home'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeContext} from '../common/ThemeContext'
const Container = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  `
const MainLayout = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <StyledThemeProvider theme={theme}>
    <Container>
    <div className='flex flex-col min-h-screen relative'>
      <Navbar />
      <main className='flex flex-col gap-14 w-full md:w-2/3 m-auto'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </Container>
    </StyledThemeProvider>


  )
}

export default MainLayout