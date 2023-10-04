// NavigationMenu.js

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

import CloseIcon from "../icons/close-outline.svg";
import CloseIcon2 from "../icons/close-outline-darkmode.svg";

const NavigationMenu = ({ isOpen, closeMenu, isDarkMode }) => {
  return (
    <div className={`navigation-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/">Settings</Link>
        </li>
        <li>
          <Link to="/about">Dark Mode / Light Mode</Link>
        </li>
      </ul>

      {/* <button onClick={closeMenu}>Close</button> */}

      {/*       <img
        src={isDarkMode ? CloseIcon2 : CloseIcon}
        onClick={closeMenu}
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
      /> */}
    </div>
  );
};

export default NavigationMenu;
