import React from 'react'
import { useTheme  } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

type Props = {}

const NavBar = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={ theme === 'light'? 'dark-navbar' : "light-navbar" }>
      <ul>
        <li> <NavLink to='/' className='nav-link'> Home </NavLink> </li>
        <li> <NavLink to='/favourites' className='nav-link'> Favourites </NavLink> </li>
        <li>
          <FontAwesomeIcon 
            className='themeIcon'
            icon={theme === 'light'? faSun : faMoon} 
            onClick={toggleTheme}
          />
        </li>
      </ul>    
    </nav>
  )
}

export default NavBar