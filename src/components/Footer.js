import React from "react";

function Footer({ isDarkMode }) {
  return (
    <footer
      className={`p-20 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-black"
      }`}
    >
      <div className="container mx-auto">
        <p className="text-center">News Hub</p>
        <p className="text-center">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
