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

import DarkLogo from "../logos_png/news-hub-logo-white-black.png"; // Import dark mode logo
import LightLogo from "../logos_png/news-hub-logo-black-white.png"; // Import light mode logo

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [sunIconClicked, setSunIconClicked] = useState(false);
  const [moonIconClicked, setMoonIconClicked] = useState(false);

  const bgColor = isDarkMode ? "bg-[#000000]" : "bg-gray-100";
  const textColor = isDarkMode ? "text-[#ff4057]" : "text-black";

  // Define the logo path based on dark or light mode
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  // Function to handle the Sun icon click
  const handleSunIconClick = () => {
    setSunIconClicked(true);

    // Remove the no-hover-background class after a short delay (e.g., 500 milliseconds)
    setTimeout(() => {
      setSunIconClicked(false);
    }, 500);

    // Call the toggleDarkMode function
    toggleDarkMode();
  };

  // Function to handle the Moon icon click
  const handleMoonIconClick = () => {
    setMoonIconClicked(true);

    // Remove the no-hover-background class after a short delay (e.g., 500 milliseconds)
    setTimeout(() => {
      setMoonIconClicked(false);
    }, 500);

    // Call the toggleDarkMode function
    toggleDarkMode();
  };

  return (
    <nav className={`p-4 relative shadow-md" ${bgColor}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center"></div>
        <img src={logoPath} alt="Logo" className="h-12 ml-8 rounded-none" />
        <div className="">
          <div className="flex flex-1 items-center">
            {/* <label className="switch mx-1" onClick={toggleDarkMode}> */}
            <label
              className={`switch mx-1 ${
                sunIconClicked ? "no-hover-background" : ""
              }`}
              onClick={handleSunIconClick}
            >
              {isDarkMode ? (
                <img
                  src={SunIcon}
                  alt="Sun"
                  className={`h-10 w-10 rounded-full p-2 ${
                    // Apply hover effect on desktop, not on mobile
                    !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                  }`}
                />
              ) : (
                <img
                  src={MoonIcon}
                  alt="Moon"
                  className={`h-10 w-10 rounded-full p-2 ${
                    // Apply hover effect on desktop, not on mobile
                    !("ontouchstart" in window) ? "hover:bg-gray-200" : ""
                  }`}
                />
              )}
            </label>
            {
              <label
                className={`switch mx-0 bg-[] p-0 rounded-full ${
                  moonIconClicked ? "no-hover-background" : ""
                }`}
                onClick={handleMoonIconClick}
              >
                {isDarkMode ? (
                  <img
                    src={MenuIcon2}
                    alt="Menu2"
                    className={`h-10 w-10 rounded-full p-1 ${
                      // Apply hover effect on desktop, not on mobile
                      !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                    }`}
                  />
                ) : (
                  <img
                    src={MenuIcon}
                    alt="Menu"
                    className={`h-10 w-10 rounded-full p-1 ${
                      // Apply hover effect on desktop, not on mobile
                      !("ontouchstart" in window) ? "hover:bg-gray-200" : ""
                    }`}
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
