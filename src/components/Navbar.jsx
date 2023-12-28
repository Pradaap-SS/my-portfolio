import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; 

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /*const [theme, setTheme] = useState('light');  // Initially, set the theme to 'light'.
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };*/
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? 'bg-primary' : 'bg-transparent'
    } ${theme === 'dark' ? 'dark-theme' : ''}`}
  >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-25 h-25 object-cover bg-white rounded' />
          <p className='text-black text-[18px] font-bold cursor-pointer flex '>
            <span className='sm:block hidden'></span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? (theme === 'light'? 'text-[#9848e8]' : 'text-[#00FFFF]')
                 : (theme === 'light' ? 'text-black' : 'text-white')
              } (theme === 'light' ? hover:'text-black' : hover:'text-white') text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* Theme Switch */}
          <div className={`navbar ${theme}`}>
            <div className="theme-switch" onClick={toggleTheme}>
              {theme === 'light' ? (
                <span role="img" aria-label="Switch to Dark Theme">🌙</span>
              ) : (
                <span role="img" aria-label="Switch to Light Theme">☀️</span>
              )}
            </div>
          </div>
        </ul>

        

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;