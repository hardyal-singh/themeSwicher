import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => { 
  const [themeMode, setThemeMode] = useState("light");
  
function lightTheme() {
    setThemeMode("light");
  }

function darkTheme() {
    setThemeMode("dark");
  }

useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <Context.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </Context.Provider>
  );
};

export default function useTheme() {
  return useContext(Context);
}
