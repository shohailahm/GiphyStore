import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ThemeContext } from "./../Context/theme";

function ThemeToggler() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className=" transition duration-500 ease-in-out rounded-full p-2 w-10">
      {theme !== "dark" ? (
        <SunIcon
          color="#FDB813"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <MoonIcon
          color="white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}

export default ThemeToggler;
