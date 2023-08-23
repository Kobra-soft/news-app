import React from "react";

function Footer({ isDarkMode }) {
  return (
    <footer
      className={`p-20 mt-auto ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto">
        <p className="text-center text-xl font-semibold p-2">News Hub</p>
        <p className="text-center text-base font-thin p-2 border-t w-full">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
