import React, { useState, useEffect } from "react";
export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
