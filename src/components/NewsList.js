import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import the clock SVG icon
/* import ClockIcon from "../icons/time-outline-light.svg"; */ // Adjust the path as needed

import clockIconLight from "../icons/time-outline-light.svg";
import clockIconDark from "../icons/time-outline-dark.svg";

function NewsList({ isDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const borderColor = isDarkMode
    ? "border-[#b5b5b5] border-b"
    : "border-gray-400 border-b";
  // Determine which set of icons to use based on the theme
  const clockIcon = isDarkMode ? clockIconDark : clockIconLight;

  React.useEffect(() => {
    // Fetch data from your JSON file or an API using axios
    axios.get("/data.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto py-5 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            {/* !!!! TITLE PADDING BOTTOM UNDERNEATH (background) !!!! */}
            <div
              className={`relative shadow-md hover:shadow-xl hover:border ${borderColor} ${
                isDarkMode ? "bg-[#101010]" : "bg-white"
              }`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[245px] max-w-full object-center"
              />
              {/* TITLE */}

              {/* This div controls the background color */}
              <div
                className={`h-auto ${isDarkMode ? "bg-[#101010]" : "bg-white"}`}
              >
                <h2 /* !!!! TITLE PADDING MAINTOP - SCALES SHORT AND LONGER (background) !!!! */
                  className={`text-[22px] font-ibmplexsans font-extrabold tracking-tighter leading-7
                  text-left pl-3 px-3 pt-3 pb-6 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {article.title}
                </h2>
              </div>

              <div className="flex justify-between items-center px-3 pb-3">
                <div className="flex">
                  {/* First "Genre" */}
                  <div
                    className={`px-3 py-1 border border-black rounded-sm ${
                      isDarkMode
                        ? "bg-[#101010] border-white text-white"
                        : "bg-white     border-black text-black"
                    }`}
                  >
                    <p className="text-xs font-poppins font-normal">
                      {article.genre}
                    </p>
                  </div>
                  {/* Second "CLUB / PLAYER ETC" */}
                  <div
                    className={`mx-2 px-3 py-1 border border-black rounded-sm ${
                      isDarkMode
                        ? "bg-[#101010] border-white text-white"
                        : "bg-white     border-black text-black"
                    }`}
                  >
                    <p className="text-xs font-poppins font-normal">
                      {article.label}
                    </p>
                  </div>
                </div>

                {/* Date and Clock Icon together */}
                <div className="flex items-center mr-1">
                  <img
                    className="w-5 h-5 rounded-full mx-1"
                    src={isDarkMode ? clockIconDark : clockIconLight}
                    alt="Clock Icon"
                  />
                  <div className="">
                    <p
                      className={`p-0 mb-[0.5px] text-xs font-rubik font-normal tracking-wide ${
                        isDarkMode
                          ? "bg-[#101010] text-white"
                          : "bg-white     text-[#797979]"
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
