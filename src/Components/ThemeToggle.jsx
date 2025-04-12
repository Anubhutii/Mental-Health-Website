import React from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "../Context/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 ${
        theme === "light" ? "bg-gradient-to-tr from-yellow-400 to-orange-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        }`}
      >
        {theme === "light" ? (
          <IoMdSunny className="text-yellow-500 text-xl" />
        ) : (
          <IoMoon className="text-gray-800 text-lg" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
