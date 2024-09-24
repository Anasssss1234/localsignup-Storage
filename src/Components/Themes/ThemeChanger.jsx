import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const handleClick = () => {
    const updatedData = theme == 'light' ? 'dark' : 'light';
    setTheme(updatedData);
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleClick }}>
        {children}
      </ThemeContext.Provider>
    </>

  )
}