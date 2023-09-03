import React, { useState } from "react";

import "../App.css";

// Import your SVG icons here
import MoonIcon from "../icons/moon.svg";
import SunIcon from "../icons/sun.svg";
import MenuIcon from "../icons/menu.svg";
import MenuIcon2 from "../icons/menu2.svg";
import SettingsIcon from "../icons/settings.svg";
import SettingsIcon2 from "../icons/settings2.svg";
import SettingsIconB from "../icons/settings-filled.svg";
import SettingsIconB2 from "../icons/settings-outline.svg";

// Import your LOGO png's here
import LogoImage1 from "../logos_png/news-hub-logo-red-dark.png";
import LogoImage2 from "../logos_png/news-hub-logo-black-white.png";
import LogoImage3 from "../logos_png/news-hub-logo-white-black.png";

import DarkLogo from "../logos_png/news-hub-logo-red-dark.png"; // Import dark mode logo
import LightLogo from "../logos_png/news-hub-logo-black-white.png"; // Import light mode logo

function Navbar({ isDarkMode, toggleDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#282634]" : "bg-gray-100";
  const textColor = isDarkMode ? "text-[#ff4057]" : "text-black";

  // Define the logo path based on dark or light mode
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  return (
    <nav className={`p-4 relative shadow-md ${bgColor}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center"></div>
        <img src={logoPath} alt="Logo" className="h-12 ml-6 rounded-sm" />
        <div className="">
          <div className="flex flex-1 items-center">
            <label className="switch mx-4" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <img src={SunIcon} alt="Sun" className="h-7 w-7 rounded-full" />
              ) : (
                <img
                  src={MoonIcon}
                  alt="Moon"
                  className="h-7 w-7 rounded-full"
                />
              )}
            </label>
            {
              <label className="switch mx-0">
                {isDarkMode ? (
                  <img
                    src={MenuIcon2}
                    alt="Menu2"
                    className="h-10 w-10 rounded-full"
                  />
                ) : (
                  <img
                    src={MenuIcon}
                    alt="Menu"
                    className="h-10 w-10 rounded-full"
                  />
                )}
              </label>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
