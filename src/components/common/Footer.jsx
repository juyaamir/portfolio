import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { FaArrowUpLong } from "react-icons/fa6";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, [])
  return (
    <footer className='text-center p-10 text-gray-500 text-xl mt-8 foot-display'>
      
        <p>&copy; 2024 | Designed & Coded with <FaHeart className='text-red-600 text-2xl inline'/> by <Link to="https://www.linkedin.com/in/amj2/" target="_blank" rel="noreferrer" className='hover:underline'>Amir Muhammad Juya</Link>
        </p>
        {
          showButton && <HashLink smooth to='#' className='fixed right-6 text-3xl bottom-10 hover:scale-125 z-50' title='Scroll to top'><FaArrowUpLong /></HashLink>
        }

    </footer>
  )
}

export default Footer