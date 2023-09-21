import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import NavigationMenu from "./NavigationMenu.js";

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

import CloseIcon from "../icons/close-outline.svg";
import CloseIcon2 from "../icons/close-outline-darkmode.svg";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [sunIconClicked, setSunIconClicked] = useState(false);
  const [moonIconClicked, setMoonIconClicked] = useState(false);
  const showBackButton = location.pathname !== "/"; // Show the back button when not on the homepage
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIconClicked(!menuIconClicked);
    setMenuOpen(!menuOpen);
  };

  const textColor = isDarkMode ? "text-[#ff4057]" : "text-black";
  const bgColor = isDarkMode ? "bg-[#000000]" : "bg-white";
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
    toggleDarkMode(!isDarkMode); // Toggle the mode
  };

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
                  isDarkMode
                    ? !("ontouchstart" in window)
                      ? "hover:bg-[#222222] hover:bg-opacity-75" // Hover background for menu icon in dark mode
                      : "" // No hover background for mobile devices!!!
                    : !("ontouchstart" in window)
                    ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                    : "" // No hover background for mobile devices!!!
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
                  isDarkMode
                    ? !("ontouchstart" in window)
                      ? "hover:bg-[#222222] hover:bg-opacity-75" // Hover background for menu icon in dark mode
                      : "" // No hover background for mobile devices!!!
                    : !("ontouchstart" in window)
                    ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                    : "" // No hover background for mobile devices!!!
                }`}
                style={{ rotate: "0deg" }}
              />
            ) : (
              <img
                src={MoonIcon}
                alt="Moon"
                className={`w-10 sm:w-10 rounded-full p-[0.50rem] ${
                  isDarkMode
                    ? !("ontouchstart" in window)
                      ? "hover:bg-[#222222] hover:bg-opacity-75" // Hover background for menu icon in dark mode
                      : "" // No hover background for mobile devices!!!
                    : !("ontouchstart" in window)
                    ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                    : "" // No hover background for mobile devices!!!
                }`}
                style={{ rotate: "180deg" }}
              />
            )}
          </label>

          {/* Render the menu icon based on menuOpen state */}
          <label
            className={`switch mx-0 ${
              menuIconClicked ? "no-hover-background" : ""
            }`}
            onClick={toggleMenu}
          >
            {menuOpen ? ( // If the menu is open, display the close (X) icon
              <img
                src={isDarkMode ? CloseIcon2 : CloseIcon}
                alt="Close"
                className={`w-10 sm:w-10 rounded-full p-[0.22rem] sm:p-[0.30rem] ${
                  isDarkMode
                    ? !("ontouchstart" in window)
                      ? "hover:bg-[#222222] hover:bg-opacity-75" // Hover background for menu icon in dark mode
                      : "" // No hover background for mobile devices!!!
                    : !("ontouchstart" in window)
                    ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                    : "" // No hover background for mobile devices!!!
                }`}
              />
            ) : (
              // Otherwise, display the menu icon along with the dark/light mode icons
              <>
                <img
                  src={isDarkMode ? MenuIcon2 : MenuIcon}
                  alt="Menu"
                  className={`w-10 sm:w-10 rounded-full p-[0.22rem] sm:p-[0.30rem] ${
                    isDarkMode
                      ? !("ontouchstart" in window)
                        ? "hover:bg-[#222222] hover:bg-opacity-75" // Hover background for menu icon in dark mode
                        : "" // No hover background for mobile devices!!!
                      : !("ontouchstart" in window)
                      ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                      : "" // No hover background for mobile devices!!!
                  }`}
                />
                {/* You can add dark/light mode icons here */}
              </>
            )}
          </label>
        </div>
        {menuIconClicked && (
          <NavigationMenu isOpen={menuIconClicked} closeMenu={toggleMenu} />
        )}
        {/* Render the menu if menuIconClicked is true */}
      </div>
    </nav>
  );
}

export default Navbar;
