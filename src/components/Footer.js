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

function Footer({ isDarkMode }) {
  // Determine which set of icons to use based on the theme
  const facebookIcon = isDarkMode ? facebookIconDark : facebookIconLight;
  const twitterIcon = isDarkMode ? twitterIconDark : twitterIconLight;
  const youtubeIcon = isDarkMode ? youtubeIconDark : youtubeIconLight;
  const githubIcon = isDarkMode ? githubIconDark : githubIconLight;
  const linkedinIcon = isDarkMode ? linkedinIconDark : linkedinIconLight;
  const shareIcon = isDarkMode ? shareIconDark : shareIconLight;

  return (
    <footer
      className={`p-20 mt-auto ${
        isDarkMode ? "bg-[#282634] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto">
        <p className="text-center text-xl font-semibold p-2 font-poppins text-[#ff4057]">
          Follow Us
        </p>

        {/* Social Media Icons */}
        <div className="text-center p-4">
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-sm w-12 md:w-14"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://twitter.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-sm w-12 md:w-14"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>

            <a
              href="https://youtube.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-sm w-12 md:w-14"
            >
              <img src={youtubeIcon} alt="Youtube" />
            </a>

            <a
              href="https://github.com/Kobra-soft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-sm w-12 md:w-14"
            >
              <img src={githubIcon} alt="Github" />
            </a>

            <a
              href="https://youtube.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-sm w-12 md:w-14"
            >
              <img src={linkedinIcon} alt="Linkedin" />
            </a>

            {/* Other social media icons can be added similarly */}

            {/*             <div className="text-center rounded-sm w-[10rem]">
              <img
                src={shareIcon}
                alt="Share"
                className={isDarkMode ? "dark-icon" : "light-icon"}
              />
            </div> */}
          </div>
        </div>

        <p className="text-center text-3xl mt-8 p-4 w-full font-poppins font-extrabold text-[#dcdcdc]">
          News Hub
        </p>

        <p className="text-center text-base py-4 border-t w-full font-poppins font-light text-[#b5b5b5]">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
