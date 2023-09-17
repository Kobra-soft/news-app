import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import the clock SVG icon
/* import ClockIcon from "../icons/time-outline-light.svg"; */ // Adjust the path as needed

import clockIconLight from "../icons/time-outline-light.svg";
import clockIconDark from "../icons/time-outline-dark.svg";

import likeIconLight from "../icons/like-svgrepo-com1.svg";
import likeIconDark from "../icons/like-svgrepo-com1.svg";

/* import likeIconLight from "../icons/like-svgrepo-com2.svg";
import likeIconDark from "../icons/like-svgrepo-com2.svg"; */

/* import likeIconLight from "../icons/like-svgrepo-com.svg";
import likeIconDark from "../icons/like-svgrepo-com.svg"; */

/* import commentIconLight from "../icons/comment-ellipsis-svgrepo-com.svg";
import commentIconDark from "../icons/comment-ellipsis-svgrepo-com.svg"; */

import commentIconLight from "../icons/comment-dots-svgrepo-com2.svg";
import commentIconDark from "../icons/comment-dots-svgrepo-com2.svg";

import shareIconLight from "../icons/share-svgrepo-com2.svg";
import shareIconDark from "../icons/share-svgrepo-com2.svg";

/* import chevronRightLightIcon from "../icons/back-svgrepo-com4-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com4-dark.svg"; */

/* import chevronRightLightIcon from "../icons/back-svgrepo-com-chevron-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com-chevron-light.svg"; */

import chevronRightLightIcon from "../icons/chevron-back-outline-dark.svg";
import chevronRightDarkIcon from "../icons/chevron-back-outline.svg";

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
      <div className="flex justify-between ml-4 items-center px-0 py-3.5 relative">
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
          className={`h-[2px] ml-3 mx-0 flex-grow ${
            isDarkMode ? "bg-white" : "bg-[#292929]"
          }`}
        >
          {" "}
        </div>
        {/* Chevron Right > - After Line ---------- */}
        <div className="flex items-center">
          <img
            className="w-7 mr-2 items-center"
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
                {/* <h2
                  className={`text-[22px] font-rubik font-extrabold tracking-tighter leading-7
                  text-left pl-3.5 pr-4 pt-5 pb-5 ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                >
                  {article.title}
                </h2> */}

                {/* Clock & Date (Icon) & (Text) */}
                {/* Clock & Date (Icon) & (Text) */}
                <div className="flex items-center space-x-1 pt-2 px-2">
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
                          : "bg-white text-[#5b5b5b]"
                      }`}
                    >
                      {article.date}
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="bg-white text-black flex items-center justify-end px-3 font-mada font-medium">
                  By - {article.author}
                </div>

                <h2
                  className={`text-[21px] font-rubik font-bold tracking-tight leading-6
                  text-left pl-3.5 pr-4 pt-5 pb-5 ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                >
                  {article.title}
                </h2>
              </div>

              <div className="flex justify-between items-center px-2 pb-0">
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
                    className={`mx-1 px-3 py-2 rounded-none ${
                      isDarkMode
                        ? "bg-[#101010] border-[1px] border-white    text-white"
                        : "bg-white     border-[1px] border-gray-600 text-[#000000]"
                    }`}
                  >
                    <p className="text-[15px] font-mada font-semibold">
                      {article.label}
                    </p>
                  </div>
                </div>

                {/* Clock & Date (Icon) & (Text) */}
                {/*                 <div className="flex items-center mr-0.5">
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
                </div> */}
              </div>
              {/* Bottom of card div - with LIKE, COMMENT, SHARE */}
              <div className="flex items-center justify-end px-4 py-4 bg-white h-auto w-auto space-x-3 text-[15px] font-mada font-semibold rounded-b-xl">
                {/* Like */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-8 mx-0"
                    src={isDarkMode ? likeIconDark : likeIconLight}
                    alt="Like Icon"
                  />
                  <span className="text-xs text-black ">Like</span>
                </div>

                {/* Comment */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-0"
                    src={isDarkMode ? commentIconDark : commentIconLight}
                    alt="Comment Icon"
                  />
                  <span className="text-xs text-black">Comment</span>
                </div>

                {/* Share */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-6 mx-0"
                    src={isDarkMode ? shareIconDark : shareIconLight}
                    alt="Share Icon"
                  />
                  <span className="text-xs text-black">Share</span>
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
