import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ThemeIcon from './ThemeIcon';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';

const NavStyle = styled.nav`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <NavStyle>
        <ul className='flex flex-row items-center gap-8 p-4'>
        <li className='border ring-2 border-green-700 rounded-full p-2 sofia-regular'>
              <Link smooth to='#'>
                <span className='text-sky-800'>J</span><span className='text-orange-600'>A</span>
              </Link>
            </li>
          <div className='flex flex-row justify-end gap-6 md:gap-10 flex-grow lg:text-2xl md:text-xl'>


            <li className='hover:border-b-2 p-2'><Link smooth to='#home' >Home</Link></li>
            <li className='hover:border-b-2 p-2'><Link smooth to='#about'>About</Link></li>
            <li className='hover:border-b-2 p-2'><Link smooth to='#skills' >Skills</Link></li>
            <li className='hover:border-b-2 p-2'><Link smooth to='#projects' >Projects</Link></li>
            <li className='hover:border-b-2 p-2'><Link smooth to='#contact'>Contact</Link></li>
          </div>
          <li className='mx-auto lg:mr-10 md:mr-4 p-2'>
            <ThemeIcon toggleTheme={toggleTheme} />
          </li>
        </ul>
      </NavStyle>
    </StyledThemeProvider>
  );
};

export default Navbar;