import React, { useState } from "react";

import "../App.css"; // Import your CSS file

// Import your SVG icons here
import MoonIcon from "../icons/moon.svg";
import SunIcon from "../icons/sun.svg";
import MenuIcon from "../icons/menu.svg";
import MenuIcon2 from "../icons/menu2.svg";
import SettingsIcon from "../icons/settings.svg";
import SettingsIcon2 from "../icons/settings2.svg";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#282634]" : "bg-gray-100";
  const textColor = isDarkMode ? "text-[#ff4057]" : "text-black";

  return (
    <nav className={`p-4 ${bgColor}`}>
      <div className="mx-0 align-middle flex justify-between items-center">
        <div className="flex flex-1 items-center">
          <label className="switch">
            {isDarkMode ? (
              <img
                src={MenuIcon2}
                alt="Menu2"
                className="h-6 w-6 rounded-full p-0"
              />
            ) : (
              <img
                src={MenuIcon}
                alt="Menu"
                className="h-6 w-6 text-gray-500 rounded-full p-0"
              />
            )}
          </label>
          {
            <h1
              className={`mx-5 text-lg font-semibold font-poppins ${textColor}`}
            >
              News Hub
            </h1>
          }
        </div>

        {/* <h1 className={`text-2xl font-semibold ${textColor}`}>News Hub</h1> */}

        <div className="mx-1 flex items-center gap-0">
          <div className="flex flex-1 items-center">
            <label className="switch" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <img
                  src={SunIcon}
                  alt="Sun"
                  className="h-5 w-5 rounded-full p-0"
                />
              ) : (
                <img
                  src={MoonIcon}
                  alt="Moon"
                  className="h-5 w-5 text-gray-500 rounded-full p-0"
                />
              )}
            </label>
          </div>
          {/* <span className={`ml-0 ${textColor}`}>{isDarkMode ? "" : ""}</span> */}
        </div>

        {/*         <div className="p-1 flex items-center gap-0">
          <div className="flex flex-1 items-center">
            <label className="switch">
              {isDarkMode ? (
                <img
                  src={SettingsIcon2}
                  alt="Settings2"
                  className="h-5 w-5 rounded-full p-0"
                />
              ) : (
                <img
                  src={SettingsIcon}
                  alt="Settings"
                  className="h-5 w-5 text-gray-500 rounded-full p-0"
                />
              )}
            </label>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
