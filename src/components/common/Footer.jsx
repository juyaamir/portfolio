import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='text-center p-10 text-gray-600 text-xl mt-8'>
      
        <p>&copy; 2024 | Designed & Coded with <FaHeart className='text-red-600 text-2xl inline'/> by <Link to="https://www.linkedin.com/in/amj2/" target="_blank" rel="noreferrer" className='hover:underline'>Amir Muhammad Juya</Link>
        </p>
    </footer>
  )
}

export default Footer