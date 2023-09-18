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

/* import commentIconLight from "../icons/comment-ellipsis-svgrepo-com.svg";
import commentIconDark from "../icons/comment-ellipsis-svgrepo-com.svg"; */
/* import commentIconLight from "../icons/comment-dots-svgrepo-com2.svg";
import commentIconDark from "../icons/comment-dots-svgrepo-com2.svg"; */
import commentIconLight from "../icons/comment-dots-solid-svgrepo-com.svg";
import commentIconDark from "../icons/comment-dots-solid-svgrepo-com-dark.svg";
/* import commentIconLight from "../icons/nb-comment-dark.svg";
import commentIconDark from "../icons/nb-comment.svg"; */

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
                <div className="flex items-center justify-between py-2 px-2">
                  <div className="flex items-center space-x-0">
                    <img
                      className="w-5 rounded-full mx-1"
                      src={isDarkMode ? clockIconDark : clockIconLight}
                      alt="Clock Icon"
                    />
                    <p
                      className={`p-0 mb-[0px] text-[12.5px] font-mada font-semibold ${
                        isDarkMode
                          ? "bg-[#101010] text-[#5b5b5b]"
                          : "bg-white text-[#353535]"
                      }`}
                    >
                      {article.date}
                    </p>
                  </div>

                  {/* Source */}
                  <div
                    className={`flex items-center text-[12.5px] font-mada font-semibold mr-2 ${
                      isDarkMode
                        ? "bg-[#101010] text-[#5b5b5b]"
                        : "bg-white text-[#353535]"
                    }`}
                  >
                    {article.source}
                  </div>
                </div>

                <h2
                  className={`text-[21px] text-center font-rubik font-extrabold tracking-tighter leading-6
                  px-3 pt-4 pb-4 ${
                    isDarkMode ? "text-white" : "text-[#292929]"
                  }`}
                >
                  {article.title}
                </h2>
              </div>

              {/* Bottom of card div - with LIKE, COMMENT, SAVE & SHARE */}
              <div
                className="flex items-center justify-center px-3 py-3 pb-4 h-auto w-auto 
                space-x-4 text-[15px] font-mada font-semibold rounded-b-xl"
              >
                {/* Like */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-[-1px]"
                    src={isDarkMode ? likeIconDark : likeIconLight}
                    alt="Like Icon"
                  />
                  <span className="text-xs text-[#5b5b5b]">Like</span>
                </div>

                {/* Comment */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-[-1px]"
                    src={isDarkMode ? commentIconDark : commentIconLight}
                    alt="Comment Icon"
                  />
                  <span className="text-xs text-[#5b5b5b]">Comment</span>
                </div>

                {/* Pin/Fave */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-[-4px]"
                    src={isDarkMode ? saveIconDark : saveIconLight}
                    alt="Save Icon"
                  />
                  <span className="text-xs text-[#5b5b5b]">Bookmark</span>
                </div>

                {/* Share */}
                <div className="flex items-center space-x-1">
                  <img
                    className="w-7 mx-[-1px]"
                    src={isDarkMode ? shareIconDark : shareIconLight}
                    alt="Share Icon"
                  />
                  <span className="text-xs text-[#5b5b5b]">Share</span>
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
