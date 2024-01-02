import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
/* import "../components/Navbar.css"; */
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

// webp logos (9kb each) ORIGINALS
/* import DarkLogo from "../logos_png/news-hub-logo-black-white.webp";
import LightLogo from "../logos_png/news-hub-logo-white-black.webp"; */

import Search from "../icons/search.svg";
import Search2 from "../icons/search2.svg";

// webp logos NEW REDONE DESIGNS
import DarkLogo from "../logos_webp&svgs/High-Resolution-Logo-Black-on-Transparent-Background.webp";
import LightLogo from "../logos_webp&svgs/High-Resolution-Logo-Color-on-Transparent-Background.webp";

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
  const bgColor = isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f0f0f0]";
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  useEffect(() => {
    // Preload logo images / LAZY LOADING
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
    <>
      {/* Top Bar Navbar (Logo, Sun/Moon, Menu) */}
      <div className="sticky-top-navbar">
        <nav
          className={`py-4 sm:py-3 md:py-3
          mx-auto px-3 md:px-3
          relative ${bgColor}`}
        >
          <div
            className="container mx-auto md:max-w-screen-xl
          flex justify-between items-center"
          >
            {/* Left LOGO */}
            <div className="flex items-center">
              {showBackButton && (
                <Link to="/" className="back-button" title="Back">
                  {/* Custom back icon */}
                  <img
                    src={isDarkMode ? BackButtonIcon2 : BackButtonIcon}
                    alt="Back"
                    className={`back-icon w-10 sm:w-10 rounded-full p-[0.50rem] ml-[-6px] mr-1 ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-75" //  in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                  />
                </Link>
              )}

              {/* <div className="flex items-center space-x-0 mx-0">
                <img
                src={logoPath}
                alt="Logo"
                className={`h-10 w-44 ml-0 ${
                  showBackButton ? "2" : "0"
                } rounded-none`}
                loading="lazy"
              />

                 text-[#ed042d]

                <text
                  className="text-3xl text-[#ffffff] font-poppins font-extrabold 
                mx-2 sm:mx-2 md:mx-2 lg:mx-0"
                >
                  NEWS HUB
                </text>
              </div> */}

              {/*               <div className="flex items-center space-x-[-0px]">
                <text
                  className={`text-3xl text-[#ffffff] font-inter font-normal border-[2px] pl-[3px] pr-[1px] ${
                    isDarkMode
                      ? "border-r-[#54e8f3] bg-[#54e8f3] border-[#54e8f3]"
                      : "border-black bg-[#000000]"
                  }`}
                >
                  NEWS
                </text>

                <text
                  className={`text-3xl font-inter font-extrabold border-[2px] bg-[#ffffff] pl-[4px] pr-[4px] ${
                    isDarkMode
                      ? "border-l-[#54e8f3] border-[#54e8f3] bg-[#000000] text-[#000000]"
                      : "border-black bg-[#000000] text-[#54e8f3]"
                  }`}
                >
                  HUB
                </text>
              </div> */}

              <div className="flex items-center space-x-[-0px]">
                <text
                  className={`text-3xl font-inter font-normal border-[2px] pl-[3px] pr-[1px] ${
                    isDarkMode
                      ? " bg-[#ffffff] border-[#ffffff] text-[#000000]"
                      : "border-black bg-[#000000] text-[#ffffff]"
                  }`}
                >
                  NEWS
                </text>

                <text
                  className={`text-3xl font-inter font-extrabold border-[2px] pl-[4px] pr-[4px] ${
                    isDarkMode
                      ? "border-l-[#ffffff] bg-[#000000] text-[#54e8f3]"
                      : "border-black text-[#54e8f3] bg-[#ffffff]"
                  }`}
                >
                  HUB
                </text>
              </div>

              {/* Search */}
              {/*               <div className="relative mx-8 hidden sm:flex md:flex">
                <input
                  type="text"
                  placeholder="Search the web"
                  className="border border-gray-300 rounded-full ml-0 py-1.5 px-4 
                   pr-0 sm:pr-12 md:pr-40
                   focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  className="absolute inset-y-0 right-0 px-0 my-[2px] mr-[2px] flex items-center
                 bg-[#e3e3e3] rounded-e-full rounded-s-full"
                >
                  <img
                    src={isDarkMode ? BackButtonIcon2 : BackButtonIcon}
                    alt="Back"
                    className={`back-icon w-10 sm:w-10 rounded-full p-[0.50rem] ml-0 mr-0 ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-75" //  in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                    style={{ rotate: "180deg" }}
                  />
                </button>
              </div> */}
            </div>

            <div className="flex items-center space-x-1.5 mx-0 ml-0">
              {/* SEARCH LOGO / SVG (Light / Dark mode */}
              <label
                className={`switch mx-0 rounded-full ${
                  sunIconClicked ? "no-hover-background" : ""
                }`}
                /* onClick={handleSunIconClick} */
              >
                {isDarkMode ? (
                  <img
                    src={Search}
                    alt="Search"
                    className={`w-10 sm:w-10 rounded-sm p-[0.50rem] border-[2px] border-[#797979] ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75 hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                    style={{ rotate: "0deg" }}
                  />
                ) : (
                  <img
                    src={Search2}
                    alt="Search2"
                    className={`w-10 sm:w-10 rounded-sm p-[0.50rem] border-[2px] border-[#797979] ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75 hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                    style={{ rotate: "0deg" }}
                  />
                )}
              </label>

              {/* SUN / MOON LOGO / SVG (Light / Dark mode */}
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
                    className={`w-10 sm:w-10 rounded-sm p-[0.50rem] border-[2px] border-[#797979] ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75 hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                    style={{ rotate: "0deg" }}
                  />
                ) : (
                  <img
                    src={MoonIcon}
                    alt="Moon"
                    className={`w-10 sm:w-10 rounded-sm p-[0.50rem] border-[2px] border-[#797979] ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-75 hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                    style={{ rotate: "180deg" }}
                  />
                )}
              </label>

              {/* MENU LOGO / SVG (Nav Menu / X Icon) */}
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
                    className={`w-10 sm:w-10 rounded-sm p-[0.22rem] sm:p-[0.30rem] border-[2px] border-[#797979] ${
                      isDarkMode
                        ? !("ontouchstart" in window)
                          ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                          : "" // No hover background for mobile devices!!!
                        : !("ontouchstart" in window)
                        ? "hover:bg-[#ebebeb] hover:bg-opacity-0  hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                        : "" // No hover background for mobile devices!!!
                    }`}
                  />
                ) : (
                  // Otherwise, display the menu icon along with the dark/light mode icons
                  <>
                    <img
                      src={isDarkMode ? MenuIcon2 : MenuIcon}
                      alt="Menu"
                      className={`w-10 sm:w-10 rounded-sm p-[0.22rem] sm:p-[0.30rem] border-[2px] border-[#797979] ${
                        isDarkMode
                          ? !("ontouchstart" in window)
                            ? "hover:bg-[#222222] hover:bg-opacity-100 hover:border-[#54e8f3]" // Hover background for menu icon in dark mode
                            : "" // No hover background for mobile devices!!!
                          : !("ontouchstart" in window)
                          ? "hover:bg-[#ebebeb] hover:bg-opacity-75 hover:border-[#54e8f3]" // Hover background for menu icon in light mode
                          : "" // No hover background for mobile devices!!!
                      }`}
                    />
                  </>
                )}
              </label>
            </div>
            {/*             {menuIconClicked && (
              <NavigationMenu isOpen={menuIconClicked} closeMenu={toggleMenu} />
            )} */}
            {/* Render the menu if menuIconClicked is true */}
          </div>
        </nav>

        {/* 2nd Navbar (Bottom Bar Nav Links) */}
        <div
          className={`sticky-bottom-navbar border-t-0 border-b-[1px] ${
            isDarkMode
              ? "bg-[#0f0f0f] text-white border-[#797979]"
              : " bg-[#f0f0f0] text-gray-900 border-[#000000]"
          }`}
        >
          <nav className="bottom-navbar">
            <div className="hidden md:flex container mx-auto md:max-w-screen-xl py-2 px-0 text-[16px] font-inter font-medium">
              {/* On larger screens, show the full navbar */}
              <ul className="flex flex-wrap">
                <li>
                  <Link to="/general" className="nav-link">
                    General
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/business" className="nav-link">
                    Business
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/entertainment" className="nav-link">
                    Entertainment
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/health" className="nav-link">
                    Health
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/science" className="nav-link">
                    Science
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/sports" className="nav-link">
                    Sports
                  </Link>
                </li>
                <p className="flex text-[10px] font-semibold text-[#797979] items-center ">
                  |
                </p>
                <li>
                  <Link to="/technology" className="nav-link">
                    Tech
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
