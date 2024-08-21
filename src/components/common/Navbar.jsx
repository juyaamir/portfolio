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
        <ul className='flex flex-row flex-wrap items-center  gap-8 p-4'>
          <div className='flex flex-row flex-wrap justify-center flex-grow gap-16 lg:text-2xl md:text-xl'>
            <li><Link smooth to='#home'>Home</Link></li>
            <li><Link smooth to='#about'>About</Link></li>
            <li><Link smooth to='#skills'>Skills</Link></li>
            <li><Link smooth to='#projects'>Projects</Link></li>
            <li><Link smooth to='#contact'>Contact</Link></li>
          </div>
          <li className='mx-auto lg:mr-10 md:mr-4'>
            <ThemeIcon toggleTheme={toggleTheme} />
          </li>
        </ul>
      </NavStyle>
    </StyledThemeProvider>
  );
};

export default Navbar;