import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-wrap h-20 justify-center items-center gap-16 sticky'>
        <li><Link smooth to='#home'>Home</Link></li>
        <li><Link smooth to='#about'>About</Link></li>
        <li><Link smooth to='#skills'>Skills</Link></li>
        <li><Link smooth to='#projects'>Projects</Link></li>
        <li><Link smooth to='#contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar