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
      className={`pt-0 pb-6 mt-auto relative shadow-md ${
        isDarkMode
          ? "bg-[#000000] border-t-[1px] border-[#ffffff]"
          : "bg-[#ff295c] border-t-[1px] border-[#000000]"
      }`}
    >
      <div className="container mx-auto md:max-w-screen-xl ">
        {/* Social Media SVG Icons - (Facebook, Twitter, Youtube, Github, LinkedIn) */}
        <div className="text-center p-0 py-8">
          <div className="flex justify-between items-center align-middle pt-0 space-x-4">
            <div className="flex items-center justify-start space-x-[-0px] pb-0">
              <text
                className="text-3xl text-[#ffffff] font-poppins font-normal border-[2px] border-black
                  bg-[#000000] pl-[3px] pr-[1px]"
              >
                NEWS
              </text>
              <text
                className="text-3xl font-poppins font-extrabold border-[2px] border-black
                  bg-[#ffffff] text-[#ff295c] pl-[4px] pr-[4px]"
              >
                HUB
              </text>
            </div>

            <div className="flex items-center justify-end space-x-3.5">
              <p
                className={`text-left text-[15px] font-medium font-inter ${
                  isDarkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                }`}
              >
                FOLLOW US
              </p>
              <a
                href="https://www.facebook.com/your-facebook-page"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 md:w-[40px] p-2 rounded-3xl border border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#ffffff]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#ebebeb] hover:border-[#000000]"
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
                className={`w-11 md:w-[40px] p-2 rounded-3xl border border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#ffffff]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#ebebeb] hover:border-[#000000]"
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
                className={`w-11 md:w-[40px] p-2 rounded-3xl border border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#ffffff]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#ebebeb] hover:border-[#000000]"
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
                className={`w-11 md:w-[40px] p-2 rounded-3xl border border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#ffffff]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#ebebeb] hover:border-[#000000]"
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
                className={`w-11 md:w-[40px] p-2 rounded-3xl border border-[#797979] ${
                  isDarkMode
                    ? "bg-[#333]   text-[#fff] hover:bg-[#535353]  hover:border-[#ffffff]"
                    : "bg-[#ffffff] text-[#000] hover:bg-[#ebebeb] hover:border-[#000000]"
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

        <div className="flex justify-start items-center mt-0 py-5 mb-0 border-t-[0.5px] border-[#ffffff]">
          <a
            href="#aboutUs"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-0 pr-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            About Us
          </a>
          <a
            href="#A-Z_Index"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            A-Z Index
          </a>
          <a
            href="#editorialPolicy"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Editorial Policy
          </a>
          <a
            href="#cookiePreferences"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Cookie Preferences
          </a>
          <a
            href="#privacyPolicy"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="#terms&Conditions"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Terms & Conditions
          </a>
          <a
            href="#accessibility"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Accessibility
          </a>
          <a
            href="#contactUs"
            className={`text-[14px] font-rubik font-normal tracking-wide text-[#ffffff] px-4 py-2 mb-1 rounded-none ${
              isDarkMode
                ? "hover:text-black hover:bg-white     hover:underline underline-[#000000] underline-offset-4 text-[#ffffff]"
                : "hover:text-[#dcdcdc] hover:bg-black hover:underline underline-[#ffffff] underline-offset-4"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/*         <div className="flex justify-start items-center pb-4 border-t-0 border-[#b5b5b5]">
          <img
            src={logoPath}
            alt="Logo"
            className="h-12 ml-0 rounded-none"
            loading="lazy"
          />
        </div>
 */}

        {/* ml-3 */}

        <p
          className={`text-left text-sm pt-5 pb-0 w-full font-rubik font-light tracking-normal  ${
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
