import React from "react";

import facebookIconLight from "../icons/logo-facebook-light.svg";
import facebookIconDark from "../icons/logo-facebook-dark.svg";

import twitterIconLight from "../icons/logo-twitter-light.svg";
import twitterIconDark from "../icons/logo-twitter-dark.svg";

import youtubeIconLight from "../icons/logo-youtube-light.svg";
import youtubeIconDark from "../icons/logo-youtube-dark.svg";

import githubIconLight from "../icons/logo-github-light.svg";
import githubIconDark from "../icons/logo-github-dark.svg";

import linkedinIconLight from "../icons/logo-linkedin-light.svg";
import linkedinIconDark from "../icons/logo-linkedin-dark.svg";

import shareIconLight from "../icons/share-social-light.svg";
import shareIconDark from "../icons/share-social-dark.svg";

import DarkLogo from "../logos_png/news-hub-logo-red-dark.png"; // Import dark mode logo
import LightLogo from "../logos_png/news-hub-logo-black-white.png"; // Import light mode logo

function Footer({ isDarkMode }) {
  // Determine which set of icons to use based on the theme
  const facebookIcon = isDarkMode ? facebookIconDark : facebookIconLight;
  const twitterIcon = isDarkMode ? twitterIconDark : twitterIconLight;
  const youtubeIcon = isDarkMode ? youtubeIconDark : youtubeIconLight;
  const githubIcon = isDarkMode ? githubIconDark : githubIconLight;
  const linkedinIcon = isDarkMode ? linkedinIconDark : linkedinIconLight;
  const shareIcon = isDarkMode ? shareIconDark : shareIconLight;

  // Define the logo path based on dark or light mode
  const logoPath = isDarkMode ? DarkLogo : LightLogo;

  return (
    <footer
      className={`p-16 mt-auto relative shadow-md  border-[#B5B5B5] ${
        isDarkMode ? "bg-[#282634]" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto">
        <p
          className={`text-center text-xl font-semibold p-4 font-poppins ${
            isDarkMode ? "text-[#ffffff]" : "text-[#000000]"
          }`}
        >
          Follow Us
        </p>
        {/* Social Media Icons */}
        <div className="text-center p-0">
          <div className="flex justify-center space-x-3.5">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-0 rounded-sm w-9 md:w-[36px]"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://twitter.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-0 rounded-sm w-9 md:w-[36px]"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>

            <a
              href="https://youtube.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-0 rounded-sm w-9 md:w-[36px]"
            >
              <img src={youtubeIcon} alt="Youtube" />
            </a>

            <a
              href="https://github.com/Kobra-soft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-0 rounded-sm w-9 md:w-[36px]"
            >
              <img src={githubIcon} alt="Github" />
            </a>

            <a
              href="https://youtube.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-0 rounded-sm w-9 md:w-[36px]"
            >
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>
        </div>
        {/* <p className="text-center text-3xl mt-8 p-4 w-full font-poppins font-extrabold text-[#ff4057]">
          News Hub
        </p> */}

        <div className="flex justify-center items-center pb-6 pt-8">
          <img src={logoPath} alt="Logo" className="h-12 rounded-sm" />
        </div>

        {/* <p className="text-center text-base py-4 border-t border-[#B5B5B5] w-full font-poppins font-normal text-[#000000]">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p> */}

        <p
          className={`text-center text-base py-4 border-t border-[#DCDCDC] w-full font-poppins font-normal ${
            isDarkMode ? "text-[#B5B5B5]" : "text-[#000000]"
          }`}
        >
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
