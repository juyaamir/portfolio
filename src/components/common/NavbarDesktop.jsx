import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ThemeIcon from './ThemeIcon';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';

const Li = styled.li`
  color: ${props => props.theme.text};`;

const NavStyle = styled.nav`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <NavStyle>
        <ul className='flex flex-row flex-wrap items-center gap-8 p-4'>
          <div className='flex flex-row flex-wrap justify-center flex-grow gap-16 lg:text-2xl md:text-xl'>
            <Li><Link smooth to='#home' className='hover:border-b-2 p-2'>Home</Link></Li>
            <li><Link smooth to='#about' className='hover:border-b-2 p-2'>About</Link></li>
            <li><Link smooth to='#skills' className='hover:border-b-2 p-2'>Skills</Link></li>
            <li><Link smooth to='#projects' className='hover:border-b-2 p-2'>Projects</Link></li>
            <li><Link smooth to='#contact' className='hover:border-b-2 p-2'>Contact</Link></li>
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