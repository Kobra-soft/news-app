import React from "react";
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
      {/* Center the content using flexbox */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 px-5">
          {articles.map((article, index) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              {index < 3 ? (
                // !!!!!
                // !!!!! For the first item in the data.json array[0], use this div structure
                // !!!!! if index less than index 1 <<< display in the div below
                // !!!!!
                <div
                  className={`relative shadow-md hover:shadow-xl hover:border 
                max-w-[480px] sm:max-w-[480px] md:max-w-[480px] lg:max-w-[480px] xl:max-w-[480px]
              rounded-t-xl rounded-b-xl ${
                isDarkMode ? "bg-[#101010]" : "bg-white"
              }`}
                  /* style={{ maxWidth: "480px", margin: "0 auto" }} */ // Set maximum width and center the card
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[225px] max-w-full object-center sm:object-center md:object-center rounded-t-xl"
                  />
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
                          {article.date}
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
                      className={`text-[22px] sm:text-[19px]
                  text-left font-rubik font-extrabold tracking-normal leading-6
                  px-4 pt-2 pb-5 border-b ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                    >
                      {article.title.length > 86
                        ? `${article.title.substring(0, 86)}...`
                        : article.title}
                    </h2>
                    {/*                 <div
                  className={`flex items-center justify-start text-[13.5px] font-mada font-semibold px-4 border-b py-3 ${
                    isDarkMode
                      ? "bg-[#101010] text-[#757575]"
                      : "bg-white text-[#757575]"
                  }`}
                >
                  By - {article.author}
                </div> */}
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
                    {/*                 <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-[-4px]"
                    src={isDarkMode ? saveIconDark : saveIconLight}
                    alt="Save Icon"
                  />
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-white" : "text-[#292929]"
                    }`}
                  >
                    Bookmark
                  </span>
                </div> */}

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
              ) : (
                // else if index greater than index 1 >>> than display in the div below
                // !!!!!
                // !!!!! For items beyond the first item n the data.json array[1]>, use a different div structure
                // !!!!!
                <div
                  className={`relative py-4 shadow-md hover:shadow-xl hover:border
                rounded-t-xl rounded-b-xl
                max-w-[480px] sm:max-w-[480px] md:max-w-[480px] lg:max-w-[480px] xl:max-w-[480px]
                ${isDarkMode ? "bg-[#101010]" : "bg-white"}`}
                  /* style={{ maxWidth: "480px", margin: "0 auto" }}  */ // Set maximum width and center the card
                >
                  {/* Customize the structure for items beyond the first one here */}
                  <div
                    className="flex mx-0 px-0 rounded-xl items-center"
                    style={{ minHeight: "100px", maxHeight: "100px" }}
                  >
                    {/* Left side (text title) */}
                    <div
                      className="w-3/4"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "100%",
                      }}
                    >
                      <div className=" ml-0 mx-5">
                        <h2
                          className={`text-[14px] sm:text-[14px] text-left font-rubik font-bold tracking-tight leading-0 ml-4 pt-0 pb-0
                          ${isDarkMode ? "text-white" : "text-[#292929]"}`}
                        >
                          {article.title.length > 100
                            ? `${article.title.substring(0, 100)}...`
                            : article.title}
                        </h2>
                      </div>
                      {/* Add additional content or space as needed */}
                      <div style={{ flex: 1 }}></div>
                    </div>
                    {/* Right side (smaller image) */}
                    <div className="p-0 pt-0 pb-0 pr-[1px]">
                      <img
                        className="rounded-e-lg object-fill"
                        src={article.image}
                        alt={article.title}
                        style={{ height: "130px", width: "180px" }} // Adjust the height value as needed
                      />
                    </div>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
