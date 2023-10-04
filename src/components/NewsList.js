import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/* import ClockIcon from "../icons/time-outline-light.svg"; */ // Adjust the path as needed
import clockIconLight from "../icons/time-outline-light.svg";
import clockIconDark from "../icons/time-outline-dark.svg";

/* import likeIconLight from "../icons/like-svgrepo-com1.svg";
import likeIconDark from "../icons/like-svgrepo-com1.svg"; */
import likeIconLight from "../icons/nb-like-dark.svg";
import likeIconDark from "../icons/nb-like.svg";
/* import likeIconLight from "../icons/like-svgrepo-com2.svg";
import likeIconDark from "../icons/like-svgrepo-com2.svg"; */
/* import likeIconLight from "../icons/like-svgrepo-com.svg";
import likeIconDark from "../icons/like-svgrepo-com.svg"; */

/* import commentIconLight from "../icons/comment-dots-svgrepo-com2.svg";v
import commentIconDark from "../icons/comment-dots-svgrepo-com2.svg"; */
/* import commentIconLight from "../icons/comment-dots-solid-svgrepo-com.svg";
import commentIconDark from "../icons/comment-dots-solid-svgrepo-com-dark.svg"; */
import commentIconLight from "../icons/nb-comment-dark.svg";
import commentIconDark from "../icons/nb-comment.svg";

import saveIconLight from "../icons/bookmark-outline.svg";
import saveIconDark from "../icons/bookmark-outline-dark.svg";

/* import shareIconLight from "../icons/share-svgrepo-com2.svg";
import shareIconDark from "../icons/share-svgrepo-com2.svg"; */
import shareIconLight from "../icons/nb-share-dark.svg";
import shareIconDark from "../icons/nb-share.svg";
/* import shareIconLight from "../icons/share-arrow-svgrepo-dark.svg";
import shareIconDark from "../icons/share-arrow-svgrepo-dark.svg"; */

/* import chevronRightLightIcon from "../icons/back-svgrepo-com4-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com4-dark.svg"; */
/* import chevronRightLightIcon from "../icons/back-svgrepo-com-chevron-light.svg";
import chevronRightDarkIcon from "../icons/back-svgrepo-com-chevron-light.svg"; */

import chevronRightLightIcon from "../icons/chevron-back-outline-dark.svg";
import chevronRightDarkIcon from "../icons/chevron-back-outline.svg";

function NewsList({ isDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const [articles2, setArticles2] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const borderColor = isDarkMode
    ? "border-[#b5b5b5] border-b"
    : "border-gray-400 border-b";
  // Determine which set of icons to use based on the theme
  const clockIcon = isDarkMode ? clockIconDark : clockIconLight;

  // Inside your component, make an API request
  useEffect(() => {
    const apiKey = "f6b499e9ef0d7e84bc4b01cd73323fb3";
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3&languages=en&countries=gb&limit=30`;

    /*     axios
      .get(apiUrl)
      .then((response) => {
        // Filter out articles with null images
        const newsData = response.data.data.filter((article, index, self) => {
          // Check if the current article's image is unique within the array
          return (
            article.image !== null &&
            self.findIndex((a) => a.image === article.image) === index
          );
        });

        setArticles(newsData);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []); */

    axios
      .get(apiUrl)
      .then((response) => {
        // Filter out articles with null images
        const newsData = response.data.data.filter(
          (article) => article.image !== null
        );
        setArticles(newsData);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your JSON file or API (using axios)
    axios.get("/data3.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  const topArticles = articles.slice(0, 6); // Get the first 6 articles
  const bottomArticles = articles.slice(0, 24); // Get articles from index 7 onwards

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredArticles = showAll ? bottomArticles : topArticles;

  return (
    <div className="container mx-auto pb-10 py-10 md:py-10 lg:py-10 xl:py-10 px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 max-w-7xl">
          {/* {articles.map((article, index) => ( */}
          {topArticles.map((article, index) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              {/* {index % 1 === 0 ? ( */}
              <div
                className={`relative shadow-md hover:shadow-xl hover:border 
                  max-w-[460px] sm:max-w-[460px] md:max-w-[480px] lg:max-w-[480px] xl:max-w-[480px]
                  rounded-t-xl rounded-b-xl ${
                    isDarkMode ? "bg-[#101010]" : "bg-white"
                  }`}
              >
                {/* Big card content */}
                {/* ... (rest of your big card content) */}

                {/* Conditionally render the image or placeholder */}
                {article.image ? (
                  <img
                    src={article.image}
                    alt=""
                    className="w-full h-[225px] max-w-full object-center sm:object-center md:object-center rounded-t-xl"
                  />
                ) : (
                  <img
                    src={`http://via.placeholder.com/640x360`}
                    alt=""
                    className="w-full h-[225px] max-w-full object-center sm:object-center md:object-center rounded-t-xl"
                  />
                )}

                {/*                 <img
                  src={article.image}
                  alt=""
                  className="w-full h-[225px] max-w-full object-center sm:object-center md:object-center rounded-t-xl"
                /> */}

                {/* This div controls the background color (CARD) */}
                {/* TITLE */}
                <div
                  className={`h-auto  ${
                    isDarkMode ? "bg-[#101010]" : "bg-white"
                  }`}
                >
                  {/* Date and Source (Icon) & (Text) */}
                  <div className="flex items-center justify-between pt-3 pb-3 px-2">
                    <div className="flex items-center space-x-0">
                      <img
                        className="w-5 rounded-full mx-1"
                        src={isDarkMode ? clockIconDark : clockIconLight}
                        alt="Clock Icon"
                      />
                      <p
                        className={`p-0 mb-[0px] text-[12.5px] font-mada font-semibold ${
                          isDarkMode
                            ? "bg-[#101010] text-white"
                            : "bg-white text-[#292929]"
                        }`}
                      >
                        {/* {article.date} */}
                        {article.published_at.substring(0, 10)}
                      </p>
                    </div>

                    {/* Source */}
                    <div
                      className={`flex items-center text-[12.5px] font-mada font-semibold mr-2 ${
                        isDarkMode
                          ? "bg-[#101010] text-[#757575]"
                          : "bg-white text-[#757575]"
                      }`}
                    >
                      {article.source}
                    </div>
                  </div>

                  <h2
                    className={`text-[22px] sm:text-[22px] md:text-[18px]
                  text-left font-rubik font-extrabold tracking-normal leading-6
                  px-4 pt-2 pb-5 border-b ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                  >
                    {article.title.length > 68
                      ? `${article.title.substring(0, 68)}...`
                      : article.title}
                  </h2>
                </div>

                {/* Bottom of card div - with LIKE, COMMENT, SAVE & SHARE */}
                <div
                  className="flex items-center justify-end px-4 py-3 pb-3 h-auto w-auto 
                space-x-3 text-[15px] font-mada font-semibold rounded-b-xl"
                >
                  {/* Like */}
                  <div className="flex items-center space-x-1">
                    <img
                      className="w-7 mx-[-1px]"
                      src={isDarkMode ? likeIconDark : likeIconLight}
                      alt="Like Icon"
                    />
                    <span
                      className={`text-xs ${
                        isDarkMode ? "text-white" : "text-[#292929]"
                      }`}
                    >
                      Like
                    </span>
                  </div>

                  {/* Comment */}
                  <div className="flex items-center space-x-1">
                    <img
                      className="w-7 mx-[-1px]"
                      src={isDarkMode ? commentIconDark : commentIconLight}
                      alt="Comment Icon"
                    />
                    <span
                      className={`text-xs ${
                        isDarkMode ? "text-white" : "text-[#292929]"
                      }`}
                    >
                      Comment
                    </span>
                  </div>

                  {/* Pin/Fave */}

                  {/* Share */}
                  <div className="flex items-center space-x-1">
                    <img
                      className="w-7 mx-[-1px]"
                      src={isDarkMode ? shareIconDark : shareIconLight}
                      alt="Share Icon"
                    />
                    <span
                      className={`text-xs ${
                        isDarkMode ? "text-white" : "text-[#292929]"
                      }`}
                    >
                      Share
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <div className="bg-red-400"></div> */}
          {filteredArticles.slice(6).map((article) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              <div
                className={`relative py-4 shadow-md hover:shadow-xl hover:border
                rounded-t-xl rounded-b-xl max-w-[480px] ${
                  isDarkMode ? "bg-[#101010]" : "bg-white"
                }`}
              >
                {/* Small card content */}
                {/* ... (rest of your small card content) */}
                <div className="flex items-center">
                  {/* Left side (image) */}
                  <div className="w-28 h-[85px] ml-3 flex items-center">
                    {/* Conditionally render the image or placeholder */}
                    {article.image ? (
                      <img
                        src={article.image}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <img
                        src={`http://via.placeholder.com/640x360`}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    )}

                    {/* <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full rounded-lg"
                    /> */}
                  </div>
                  {/* Spacing */}
                  <div className="w-2"></div>{" "}
                  {/* You can adjust the width of the gap here. */}
                  {/* Right side (text content) */}
                  <div className="flex-1 flex items-center">
                    <h2
                      className={`mx-1 mr-5 text-[14px] sm:text-[14px] text-left font-rubik font-bold tracking-tight leading-0 ${
                        isDarkMode ? "text-white" : "text-[#292929]"
                      }`}
                    >
                      {article.title.length > 50
                        ? `${article.title.substring(0, 71)}...`
                        : article.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={toggleShowAll}
            className="bg-black border border-solid border-gray-500 hover:bg-gray-500 hover:text-white
             text-gray-200 hover:border-transparent font-poppins font-medium text-base px-14 py-3 rounded-lg
             "
          >
            {showAll ? "Show Less Articles?" : "Load More Articles?"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
