import React, { useEffect } from "react";
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

// png logos (15kb each)
/* import DarkLogo from "../logos_png/news-hub-logo-black-white.png";
import LightLogo from "../logos_png/news-hub-logo-white-black.png"; */

// webp logos (9kb each)
import DarkLogo from "../logos_png/news-hub-logo-black-white.webp";
import LightLogo from "../logos_webp&svgs/High-Resolution-Logo-RedWhite-on-Transparent-Background.webp";

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

  useEffect(() => {
    // Preload logo images / LAZY LOADING
    const preloadImages = [DarkLogo, LightLogo];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <footer
      className={`pt-0 pb-0 mt-auto relative shadow-md ${
        isDarkMode
          ? "bg-[#0f0f0f] border-t-[1px] border-[#797979]"
          : "bg-[#f0f0f0] border-t-[1px] border-[#797979]"
      }`}
    >
      <div className="container mx-auto md:max-w-screen-xl">
        {/* LOGO & FOLLOW US SVGS */}
        {/* Social Media SVG Icons - (Facebook, Twitter, Youtube, Github, LinkedIn) */}
        <div className="text-center p-0 md:py-8 py-4">
          <div className="flex justify-between items-center align-middle pt-0 space-x-4">
            {/* <div className="flex items-center space-x-[-0px]">
              <text
                className={`text-3xl font-inter font-normal border-[2px] pl-[3px] pr-[1px] ${
                  isDarkMode
                    ? "border-r-[#54e8f3] bg-[#54e8f3] border-[#54e8f3] text-[#000000]"
                    : "border-black bg-[#000000] text-[#ffffff]"
                }`}
              >
                NEWS
              </text>

              <text
                className={`text-3xl font-inter font-extrabold border-[2px] pl-[4px] pr-[4px] ${
                  isDarkMode
                    ? "border-l-[#54e8f3] border-[#54e8f3] bg-[#000000] text-[#ffffff]"
                    : "border-black text-[#54e8f3] bg-[#ffffff]"
                }`}
              >
                HUB
              </text>
            </div> */}

            {/* LOGO1 hidden if small < display if medium + device / screen */}
            <div className="hidden md:flex items-center space-x-[-0px]">
              <text
                className={`text-3xl font-inter font-normal border-[2px] pl-[3px] pr-[1px] ${
                  isDarkMode
                    ? "border-r-[#ffffff] bg-[#ffffff] border-[#ffffff] text-[#000000]"
                    : "border-black bg-[#000000] text-[#ffffff]"
                }`}
              >
                NEWS
              </text>

              <text
                className={`text-3xl font-inter font-extrabold border-[2px] pl-[4px] pr-[4px] ${
                  isDarkMode
                    ? "border-l-[#ffffff] border-[#ffffff] bg-[#000000] text-[#54e8f3]"
                    : "border-black text-[#54e8f3] bg-[#ffffff]"
                }`}
              >
                HUB
              </text>
            </div>

            {/* FOLLOW US / ICONS 1 for for bigger screens than phones / tablets, hide if below < screen size */}
            <div className="hidden md:flex items-center justify-end space-x-3.5">
              <p
                className={`text-left text-[15px] font-medium font-inter ${
                  isDarkMode ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                FOLLOW US
              </p>
              <a
                href="https://www.facebook.com/your-facebook-page"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
                }`}
                title="Facebook"
              >
                <img
                  src={isDarkMode ? facebookIconDark : facebookIconLight}
                  alt="Facebook"
                />
              </a>

              <a
                href="https://twitter.com/your-twitter-page"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
                }`}
                title="Twitter"
              >
                <img
                  src={isDarkMode ? twitterIconDark : twitterIconLight}
                  alt="Twitter"
                />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
                }`}
                title="Youtube"
              >
                <img
                  src={isDarkMode ? youtubeIconDark : youtubeIconLight}
                  alt="Youtube"
                />
              </a>

              <a
                href="https://github.com/Kobra-soft"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
                }`}
                title="Github"
              >
                <img
                  src={isDarkMode ? githubIconDark : githubIconLight}
                  alt="Github"
                />
              </a>

              <a
                href="https://uk.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
                }`}
                title="Linkedin"
              >
                <img
                  src={isDarkMode ? linkedinIconDark : linkedinIconLight}
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>

        {/* FOLLOW US / ICONS 2 for small screen phones tablets, hide if above > screen size */}
        <div className="flex md:hidden items-center justify-center pb-6 mx-3 space-x-3.5 pt-0">
          <p
            className={`text-left text-[15px] font-medium font-inter ${
              isDarkMode ? "text-[#ffffff]" : "text-[#000000]"
            }`}
          >
            FOLLOW US:
          </p>
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
              isDarkMode
                ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
            }`}
            title="Facebook"
          >
            <img
              src={isDarkMode ? facebookIconDark : facebookIconLight}
              alt="Facebook"
            />
          </a>

          <a
            href="https://twitter.com/your-twitter-page"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
              isDarkMode
                ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
            }`}
            title="Twitter"
          >
            <img
              src={isDarkMode ? twitterIconDark : twitterIconLight}
              alt="Twitter"
            />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
              isDarkMode
                ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
            }`}
            title="Youtube"
          >
            <img
              src={isDarkMode ? youtubeIconDark : youtubeIconLight}
              alt="Youtube"
            />
          </a>

          <a
            href="https://github.com/Kobra-soft"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
              isDarkMode
                ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
            }`}
            title="Github"
          >
            <img
              src={isDarkMode ? githubIconDark : githubIconLight}
              alt="Github"
            />
          </a>

          <a
            href="https://uk.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 md:w-[40px] p-2 rounded-3xl border-[2px] border-[#797979] ${
              isDarkMode
                ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#54e8f3]"
                : "bg-[#ffffff] text-[#000] hover:bg-[#f6f6f6] hover:border-[#54e8f3]"
            }`}
            title="Linkedin"
          >
            <img
              src={isDarkMode ? linkedinIconDark : linkedinIconLight}
              alt="Linkedin"
            />
          </a>
        </div>

        {/* FOOTER LINKS */}
        <div
          className={`flex flex-col md:flex-row justify-start items-center mt-0 py-5 mb-0 mx-3 md:mx-0 border-t-[0.5px] border-b-[0.5px] md:border-b-[0.0px] ${
            isDarkMode ? "border-[#797979]" : "border-[#797979]"
          }`}
        >
          <a
            href="#aboutUs"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] mx-4 md:px-0 pr-0 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            About Us
          </a>
          <a
            href="#A-Z_Index"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            A-Z Index
          </a>
          <a
            href="#A-Z_Index"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Editorial Policy
          </a>
          <a
            href="#cookiePreferences"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Cookie Preferences
          </a>
          <a
            href="#privacyPolicy"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] first-line:hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="#terms&Conditions"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Terms & Conditions
          </a>
          <a
            href="#accessibility"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Accessibility
          </a>
          <a
            href="#contactUs"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#000000] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-[#54e8f3] hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#54e8f3] hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* LOGO2 display on small screens and hide on medium and larger screens */}
        <div className="flex justify-center">
          <div className="md:hidden flex items-center space-x-[-0px] pt-6 pb-2">
            <text
              className={`text-3xl font-inter font-normal border-[2px] pl-[3px] pr-[1px] ${
                isDarkMode
                  ? "border-r-[#ffffff] bg-[#ffffff] border-[#ffffff] text-[#000000]"
                  : "border-black bg-[#000000] text-[#ffffff]"
              }`}
            >
              NEWS
            </text>

            <text
              className={`text-3xl font-inter font-extrabold border-[2px] pl-[4px] pr-[4px] ${
                isDarkMode
                  ? "border-l-[#ffffff] border-[#ffffff] bg-[#000000] text-[#54e8f3]"
                  : "border-black text-[#54e8f3] bg-[#ffffff]"
              }`}
            >
              HUB
            </text>
          </div>
        </div>
        {/* COPYRIGHT */}
        <p
          className={`text-center md:text-left text-sm pt-2 md:pt-0 mx-0 md:mx-0 pb-2 md:pb-4 w-full font-rubik font-light tracking-normal  ${
            isDarkMode ? "text-[#B5B5B5]" : "text-[#000000]"
          }`}
        >
          &copy; {new Date().getFullYear()} News Hub. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
