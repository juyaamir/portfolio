import React, { useContext, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ThemeIcon from './ThemeIcon';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { Divide as Hamburger } from 'hamburger-react';
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";
const NavStyle = styled.nav`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.25s linear;
    z-index: 10; /* Ensure nav is on top */
`;

const Ul = styled.ul`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    z-index: 9; /* Ensure ul is below nav */
`;

const NavbarMob = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledThemeProvider theme={theme}>
      <NavStyle className='flex flex-row relative justify-end mb-16'>
        <div className='fixed mr-28 mt-6 shadow-lg'>
          <ThemeIcon toggleTheme={toggleTheme} />
        </div>
        <div className='mt-6 mr-8 fixed z-20 shadow-lg'> 
          <Hamburger 
            size={34} 
            toggled={isOpen} 
            toggle={setOpen}
            direction='left'
            duration={0.9}
          />
        </div>
        {isOpen && (
          <Ul className='flex flex-col justify-center items-center gap-8 text-xl h-full w-screen text-center fixed left-0 top-0'>
            <li className='w-1/2 border-2 p-2 rounded-lg hover:scale-125 duration-200 shadow-lg'>
                <Link smooth to='#home' onClick={() => setOpen(false)} className='flex justify-between'>
                    <span>Home</span> <AiOutlineHome />
                </Link>
            </li>
            <li className='w-1/2 border-2 p-2 rounded-lg hover:scale-125 duration-200 shadow-lg'>
                <Link smooth to='#about' onClick={() => setOpen(false)} className='flex justify-between'>
                    <span>About</span> <SiAboutdotme />
                </Link>
            </li>
            <li className='w-1/2 border-2 p-2 rounded-lg hover:scale-125 duration-200 shadow-lg'>
                <Link smooth to='#skills' onClick={() => setOpen(false)} className='flex justify-between'>
                    <span>Skills</span> <GiSkills />
                </Link>
            </li>
            <li className='w-1/2 border-2 p-2 rounded-lg hover:scale-125 duration-200 shadow-lg'>
                <Link smooth to='#projects' onClick={() => setOpen(false)} className='flex justify-between'>
                    <span>Projects</span> <GrProjects />
                </Link>
            </li>
            <li className='w-1/2 border-2 p-2 rounded-lg hover:scale-125 duration-200 shadow-lg'>
                <Link smooth to='#contact' onClick={() => setOpen(false)} className='flex justify-between'>
                    <span>Contact</span> <MdContactSupport />
                </Link>
            </li>
          </Ul>
        )}
      </NavStyle>
    </StyledThemeProvider>
  );
};

export default NavbarMob;