import React from 'react'
import { useTheme  } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

type Props = {}

const NavBar = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={ theme === 'light'? 'dark-navbar' : "light-navbar" }>
      <ul>
        <li>
          Home
        </li>
        <li>
          Favourites
        </li>
        <li>
        <FontAwesomeIcon 
            className='themeIcon'
            icon={theme === 'light'? faMoon : faSun} 
            onClick={toggleTheme}
          />
        </li>
      </ul>    
    </nav>
  )
}

export default NavBar