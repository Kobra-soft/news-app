import React, { useState } from "react";

import "../App.css"; // Import your CSS file

// Import your SVG icons here
import MoonIcon from "../icons/moon.svg";
import SunIcon from "../icons/sun.svg";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const bgColor = isDarkMode ? "bg-black" : "bg-gray-100";
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <nav className={`p-6 ${bgColor}`}>
      <div className="mx-8 flex justify-between items-center">
        <h1 className={`text-2xl font-semibold ${textColor}`}>News Hub</h1>
        <div className="flex items-center">
          <label className="switch" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <img
                src={SunIcon}
                alt="Sun"
                className="h-8 w-8 bg-gray-300 rounded-full p-1"
                style={{ fill: "red" }}
              />
            ) : (
              <img
                src={MoonIcon}
                alt="Moon"
                className="h-8 w-8 text-gray-500 bg-gray-300 rounded-full p-1"
                /* style={{ fill: "red" }} */
              />
            )}
          </label>
          <span className={`ml-3 ${textColor}`}>{isDarkMode ? "" : ""}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
