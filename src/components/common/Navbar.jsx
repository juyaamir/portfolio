
import { HashLink as Link } from 'react-router-hash-link'
import ThemeController from './ThemeController'

const Navbar = () => {
  
  return (
    <nav>
      <ul className='flex flex-row flex-wrap items-center gap-8 border border-red-400 p-4'>
        <div className='flex flex-row  flex-wrap justify-center flex-grow gap-16'>
          <li><Link smooth to='#home'>Home</Link></li>
          <li><Link smooth to='#about'>About</Link></li>
          <li><Link smooth to='#skills'>Skills</Link></li>
          <li><Link smooth to='#projects'>Projects</Link></li>
          <li><Link smooth to='#contact'>Contact</Link></li>
        </div>
        <li className='mr-6'><ThemeController /></li>
      </ul>
    </nav>
  )
}

export default Navbar