import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import the clock SVG icon
/* import ClockIcon from "../icons/time-outline-light.svg"; */ // Adjust the path as needed

import clockIconLight from "../icons/time-outline-light.svg";
import clockIconDark from "../icons/time-outline-dark.svg";

/* import chevronRightLightIcon from "../icons/back-svgrepo-com4-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com4-dark.svg"; */

/* import chevronRightLightIcon from "../icons/back-svgrepo-com-chevron-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com-chevron-light.svg"; */

import chevronRightLightIcon from "../icons/back-light-svgrepo-com-light.svg";
import chevronRightDarkIcon from "../icons/back-light-svgrepo-com-dark.svg";

function NewsList({ isDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const borderColor = isDarkMode
    ? "border-[#b5b5b5] border-b"
    : "border-gray-400 border-b";
  // Determine which set of icons to use based on the theme
  const clockIcon = isDarkMode ? clockIconDark : clockIconLight;

  React.useEffect(() => {
    // Fetch data from your JSON file or API (using axios)
    axios.get("/data.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto pb-10 py-5 px-0">
      {/* This div controls the NEWSLIST CARD - Padding / Rounded - needs to be done here */}
      <div className="flex justify-between mx-4 items-center px-0 py-3.5 relative">
        <div className="flex items-center">
          <text
            className={`text-[22px] font-rubik font-bold ${
              isDarkMode ? "text-white" : "text-[#292929]"
            }`}
          >
            {/* NEWS HUB */}
            LATEST NEWS
          </text>
        </div>
        {/* Add a line with mx-2 padding on both sides */}
        <div
          className={`h-[2px] ml-3 mr-[-3px] mx-0 flex-grow ${
            isDarkMode ? "bg-white" : "bg-[#292929]"
          }`}
        >
          {" "}
        </div>

        <div className="flex items-center">
          <img
            className="w-[24px] mx-0"
            src={isDarkMode ? chevronRightDarkIcon : chevronRightLightIcon}
            alt="Chevron Right Icon"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div
              className={`relative p-0 shadow-md hover:shadow-xl hover:border rounded-t-xl rounded-b-xl ${
                isDarkMode ? "bg-[#101010]" : "bg-white"
              }`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[205px] max-w-full object-center sm:object-center md:object-center rounded-t-xl"
              />
              {/* This div controls the background color */}
              {/* TITLE */}
              <div
                className={`h-auto  ${
                  isDarkMode ? "bg-[#101010]" : "bg-white"
                }`}
              >
                <h2
                  className={`text-[22px] font-rubik font-extrabold tracking-tighter leading-7
                  text-left pl-3.5 pr-4 pt-5 pb-5 ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                >
                  {article.title}
                </h2>
              </div>

              <div className="flex justify-between items-center px-4 pb-5">
                <div className="flex">
                  {/* First "Genre - FOOTBALL/FORMULA1 ETC" */}
                  {/*                   <div
                    className={`px-3 py-2 rounded-none ${
                      isDarkMode
                        ? "bg-[#101010] border border-white    text-white"
                        : "bg-white     border border-gray-400 text-[#000000]" // text-[#222526]
                    }`}
                  >
                    <p className="text-[15px] font-mada font-semibold">
                      {article.genre}
                    </p>
                  </div> */}
                  {/* Second label - CLUB/PLAYER ETC" */}
                  <div
                    className={`mx-0 px-3 py-2 rounded-none ${
                      isDarkMode
                        ? "bg-[#101010] border-[1.5px] border-white    text-white"
                        : "bg-white     border-[1.5px] border-gray-700 text-[#000000]"
                    }`}
                  >
                    <p className="text-[15px] font-mada font-semibold">
                      {article.label}
                    </p>
                  </div>
                </div>

                {/* Clock & Date (Icon) & (Text) */}
                <div className="flex items-center mr-0.5">
                  <img
                    className="w-5 rounded-full mx-1"
                    src={isDarkMode ? clockIconDark : clockIconLight}
                    alt="Clock Icon"
                  />
                  <div className="">
                    <p
                      className={`p-0 mb-[0px] text-[12.5px] font-inter font-semibold tracking-wide ${
                        isDarkMode
                          ? "bg-[#101010] text-[#b3b3b3]"
                          : "bg-white     text-[#5b5b5b]"
                      }`}
                    >
                      {article.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
