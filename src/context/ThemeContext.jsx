import React, { useState, createContext, useContext} from 'react'
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dart');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light'? 'dart' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        )
 };


 export const useTheme = () => {
    return useContext(ThemeContext)
 }