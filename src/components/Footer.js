import React from "react";
import facebookIconLight from "../icons/logo-facebook-light.svg";
import facebookIconDark from "../icons/logo-facebook-dark.svg";
import twitterIconLight from "../icons/logo-twitter-light.svg";
import twitterIconDark from "../icons/logo-twitter-dark.svg";
import shareIconLight from "../icons/share-social-light.svg";
import shareIconDark from "../icons/share-social-dark.svg";

function Footer({ isDarkMode }) {
  // Determine which set of icons to use based on the theme
  const facebookIcon = isDarkMode ? facebookIconDark : facebookIconLight;
  const twitterIcon = isDarkMode ? twitterIconDark : twitterIconLight;
  const shareIcon = isDarkMode ? shareIconDark : shareIconLight;

  return (
    <footer
      className={`p-20 mt-auto ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto">
        <p className="text-center text-lg font-semibold p-2 font-poppins">
          FOLLOW US
        </p>

        {/* Social Media Icons */}
        <div className="text-center p-4">
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 mr-4"
            >
              <img src={facebookIcon} alt="Facebook" width={24} />
            </a>

            <a
              href="https://twitter.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-400 mr-4"
            >
              <img src={twitterIcon} alt="Twitter" width={24} />
            </a>

            {/* Other social media icons can be added similarly */}

            <div className="text-center p-0">
              <img
                src={shareIcon}
                alt="Share"
                width={24}
                className={isDarkMode ? "dark-icon" : "light-icon"}
              />
            </div>
          </div>
        </div>

        <p className="text-center text-base font-thin p-2 border-t w-full font-poppins">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
