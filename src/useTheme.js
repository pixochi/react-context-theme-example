import { createContext, useContext, useState } from "react";

// Creates a Context object.
export const ThemeContext = createContext();

// A custom hook for consuming the Context in other components.
export const useThemeContext = () => useContext(ThemeContext);

// A wrapper for the Context Provider providing access
// to the current theme (light or dark) and a function to update the theme.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
