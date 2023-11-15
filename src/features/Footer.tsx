import React from 'react'
import { useTheme  } from '../context/ThemeContext';
import '../App.css'


const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light'? 'dark-footer' : 'light-footer'}>
      Copyright by Alexander Sibhatu @2023
    </div>
  )
}

export default Footer