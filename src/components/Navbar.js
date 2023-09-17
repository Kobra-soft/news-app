import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
/* import BackButtonIcon from "../icons/chevron-back-outline.svg";
import BackButtonIcon2 from "../icons/chevron-back-outline-dark.svg"; */
import BackButtonIcon from "../icons/arrow-back-outline-dark.svg";
import BackButtonIcon2 from "../icons/arrow-back-outline.svg";

/* import MoonIcon from "../icons/contrast-light2.svg";
import SunIcon from "../icons/contrast-dark2.svg"; */

import MoonIcon from "../icons/contrast-outline-dark.svg";
import SunIcon from "../icons/contrast-outline.svg";

/* import MenuIcon from "../icons/menu-sharp-dark.svg";
import MenuIcon2 from "../icons/menu-sharp-light.svg"; */
import MenuIcon from "../icons/menu-outline-dark.svg";
import MenuIcon2 from "../icons/menu-outline.svg";

// png logos (15kb each)
/* import DarkLogo from "../logos_png/news-hub-logo-black-white.png";
import LightLogo from "../logos_png/news-hub-logo-white-black.png"; */

// webp logos (9kb each)
import DarkLogo from "../logos_png/news-hub-logo-black-white.webp";
import LightLogo from "../logos_png/news-hub-logo-white-black.webp";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [sunIconClicked, setSunIconClicked] = useState(false);
  const [moonIconClicked, setMoonIconClicked] = useState(false);
  const showBackButton = location.pathname !== "/"; // Show the back button when not on the homepage

  const textColor = isDarkMode ? "text-[#ff4057]" : "text-black";
  const bgColor = isDarkMode ? "bg-[#000000]" : "bg-white";
  // Define the logo path based on dark or light mode
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  useEffect(() => {
    // Preload logo images
    const preloadImages = [DarkLogo, LightLogo];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Function to handle the Sun icon click
  const handleSunIconClick = () => {
    setSunIconClicked(true);
    setTimeout(() => {
      setSunIconClicked(false);
    }, 500);
    // Call the toggleDarkMode function with the opposite of the current mode
    toggleDarkMode(!isDarkMode); // Toggle the mode
  };

  // Function to handle the Menu icon click
  /*   const handleMenuIconClick = () => {
    setMenuIconClicked(true);
    setTimeout(() => {
      setMenuIconClicked(false);
    }, 500);
    // Call the toggleDarkMode function with the opposite of the current mode
    toggleDarkMode(!isDarkMode); // Toggle the mode
  }; */

  return (
    <nav className={`py-4 sm:py-2 relative shadow-md ${bgColor}`}>
      <div className="flex justify-between items-center px-0 mx-1">
        {/* Left LOGO */}
        <div className="flex items-center ">
          {showBackButton && (
            <Link to="/" className="back-button" title="Back">
              {/* Custom back icon */}
              <img
                src={isDarkMode ? BackButtonIcon2 : BackButtonIcon}
                alt="Back"
                className={`back-icon w-10 sm:w-10 rounded-full p-[0.50rem] ml-0 mr-1 ${
                  !("ontouchstart" in window)
                    ? isDarkMode
                      ? "hover:bg-[#222222]" // Dark mode hover background color
                      : "hover:bg-[#ebebeb]" // Light mode hover background color
                    : "" // No hover effect on touch devices
                }`}
              />
            </Link>
          )}
          <img
            src={logoPath}
            alt="Logo"
            className={`h-10 w-44 ml-0 ${
              showBackButton ? "2" : "0"
            } rounded-none`}
            loading="lazy"
          />
        </div>

        {/* Right SVG ICONS (Sun/Moon and Menu) */}
        <div className="flex items-center space-x-0 mx-1">
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
                className={`w-10 sm:w-10 rounded-full p-[0.50rem] ${
                  !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                }`}
                style={{ rotate: "0deg" }}
              />
            ) : (
              <img
                src={MoonIcon}
                alt="Moon"
                className={`w-10 sm:w-10 rounded-full p-[0.50rem] ${
                  !("ontouchstart" in window) ? "hover:bg-[#ebebeb]" : ""
                }`}
                style={{ rotate: "180deg" }}
              />
            )}
          </label>

          {/* Left SVG ICON (Menu) */}
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
                className={`w-10 sm:w-10 rounded-full p-[0.22rem] sm:p-[0.30rem] ${
                  !("ontouchstart" in window) ? "hover:bg-[#222222]" : ""
                }`}
              />
            ) : (
              <img
                src={MenuIcon}
                alt="Menu"
                className={`w-10 sm:w-10 rounded-full p-[0.22rem] sm:p-[0.30rem] ${
                  !("ontouchstart" in window) ? "hover:bg-[#ebebeb]" : ""
                }`}
              />
            )}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
