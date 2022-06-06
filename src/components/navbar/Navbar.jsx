import React, { useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import code_logo from '../../assets/code_logo_white.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Hjem</a></p>
    <p><a href="#skills">Ferdigheter</a></p>
    <p><a href="#projects">Prosjekter</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='project__navbar'>
      <div className='project__navbar-links'>
        <div className='project__navbar-links_logo'>
          <img src={code_logo} alt="code_logo" />
        </div>
        <div className='project__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='project__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='project__navbar-menu_container tilt-in-fwd-tr'>
            <div className='project__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar