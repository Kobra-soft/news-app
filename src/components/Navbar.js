import React, { useState } from "react";

import "../App.css";

// Import your SVG icons here
/* import MoonIcon from "../icons/moon.svg"; */
/* import MoonIcon from "../icons/contrast-light.svg";
import SunIcon from "../icons/contrast-dark.svg"; */

import MoonIcon from "../icons/contrast-light2.svg";
import SunIcon from "../icons/contrast-dark2.svg";
/* import MenuIcon from "../icons/menu-sharp-dark.svg";
import MenuIcon2 from "../icons/menu-sharp-light.svg"; */

/* import MenuIcon from "../icons/menu-alt-2-dark.svg";
import MenuIcon2 from "../icons/menu-alt-2-light.svg"; */

/* import MenuIcon from "../icons/menu-alt-1-dark.svg";
import MenuIcon2 from "../icons/menu-alt-1-light.svg"; */

import MenuIcon from "../icons/menu-02-svgrepo-com-black.svg";
import MenuIcon2 from "../icons/menu-02-svgrepo-com-white.svg";

/* import SettingsIcon from "../icons/settings.svg";
import SettingsIcon2 from "../icons/settings2.svg";
import SettingsIconB from "../icons/settings-filled.svg";
import SettingsIconB2 from "../icons/settings-outline.svg"; */

// Import your LOGO png's here
/* import LogoImage1 from "../logos_png/news-hub-logo-red-dark.png";
import LogoImage2 from "../logos_png/news-hub-logo-black-white.png";
import LogoImage3 from "../logos_png/news-hub-logo-white-black.png"; */

import DarkLogo from "../logos_png/news-hub-logo-black-white.png"; // Import dark mode logo
import LightLogo from "../logos_png/news-hub-logo-white-black.png"; // Import light mode logo

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [sunIconClicked, setSunIconClicked] = useState(false);
  const [moonIconClicked, setMoonIconClicked] = useState(false);
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  const bgColor = isDarkMode ? "bg-[#000000]" : "bg-white";
  /*   const textColor = isDarkMode ? "text-[#ff4057]" : "text-black"; */

  // Define the logo path based on dark or light mode
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  // Function to handle the Sun icon click
  const handleSunIconClick = () => {
    setSunIconClicked(true);
    setTimeout(() => {
      setSunIconClicked(false);
    }, 500);
    // Call the toggleDarkMode function with the opposite of the current mode
    toggleDarkMode(!isDarkMode); // Toggle the mode
  };

  // Function to handle the Moon icon click
  /*   const handleMoonIconClick = () => {
    setMoonIconClicked(true);
    setTimeout(() => {
      setMoonIconClicked(false);
    }, 500);
    // Call the toggleDarkMode function with the opposite of the current mode
    toggleDarkMode(!isDarkMode); // Toggle the mode
  }; */

  // Function to handle the Menu icon click
  const handleMenuIconClick = () => {
    setMenuIconClicked(true);
    setTimeout(() => {
      setMenuIconClicked(false);
    }, 500);
    // Call the toggleDarkMode function with the opposite of the current mode
    toggleDarkMode(!isDarkMode); // Toggle the mode
  };

  return (
    <nav className={`py-4 px-2 sm:py-2 relative shadow-md ${bgColor}`}>
      {/* Left SVG ICON (Menu)*/}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* onClick event listener for (Menu > Navigation Menu) */}
          <label
            className={`switch mx-0 ${
              menuIconClicked ? "no-hover-background" : ""
            }`}
            /* onClick={handleMenuIconClick} */
          >
            {isDarkMode ? (
              <img
                src={MenuIcon2}
                alt="Menu2"
                className={`h-11 w-11 sm:h-10 sm:w-10 rounded-full p-2 ${
                  !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                }`}
              />
            ) : (
              <img
                src={MenuIcon}
                alt="Menu"
                className={`h-11 w-11 sm:h-10 sm:w-10 rounded-full p-2 ${
                  !("ontouchstart" in window) ? "hover:bg-[#ebebeb]" : ""
                }`}
              />
            )}
          </label>
        </div>
        {/* Middle LOGO (Light/Dark Mode .png's - Toggle)*/}
        <img
          src={logoPath}
          alt="Logo"
          className="h-10 w-44 ml-3 rounded-none"
        />
        {/* Right SVG ICON (Sun/Moon) */}
        <div className="">
          <div className="flex flex-1 items-center">
            {/* onClick event listener for (Light/Dark Mode - Toggle) */}
            <label
              className={`switch mx-0 rounded-full ${
                sunIconClicked ? "no-hover-background" : ""
              }`}
              onClick={handleSunIconClick}
            >
              {isDarkMode ? (
                <img
                  src={SunIcon}
                  alt="Sun"
                  className={`h-12 w-12 sm:h-11 sm:w-11 rounded-full p-3 ${
                    !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                  }`}
                  style={{ rotate: "180deg" }}
                />
              ) : (
                <img
                  src={MoonIcon}
                  alt="Moon"
                  className={`h-12 w-12 sm:h-11 sm:w-11 rounded-full p-3 ${
                    !("ontouchstart" in window) ? "hover:bg-[#ebebeb]" : ""
                  }`}
                />
              )}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
