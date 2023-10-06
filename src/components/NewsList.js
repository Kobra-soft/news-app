import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import clockIconLight from "../icons/time-outline-light.svg";
import clockIconDark from "../icons/time-outline-dark.svg";
import likeIconLight from "../icons/nb-like-dark.svg";
import likeIconDark from "../icons/nb-like.svg";
import commentIconLight from "../icons/nb-comment-dark.svg";
import commentIconDark from "../icons/nb-comment.svg";
import saveIconLight from "../icons/bookmark-outline.svg";
import saveIconDark from "../icons/bookmark-outline-dark.svg";
import shareIconLight from "../icons/nb-share-dark.svg";
import shareIconDark from "../icons/nb-share.svg";
import chevronRightLightIcon from "../icons/chevron-back-outline-dark.svg";
import chevronRightDarkIcon from "../icons/chevron-back-outline.svg";

function NewsList({ isDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const [articles2, setArticles2] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const clockIcon = isDarkMode ? clockIconDark : clockIconLight;

  const [leftArticles, setLeftArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);

  useEffect(() => {
    const apiKey = "f6b499e9ef0d7e84bc4b01cd73323fb3";
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3&languages=en&countries=gb&limit=30`;

    // Fetch data from data2.json for the left side
    axios.get("/data3.json").then((response) => {
      setLeftArticles(response.data);
    });

    // Fetch data from data3.json for the right side
    axios.get("/data3.json").then((response) => {
      setRightArticles(response.data);
    });
  }, []);

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

  /*     axios
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
    axios.get("/data3.json").then((response) => {
      setArticles(response.data);
    });
  }, []); */

  /*   const topArticles = articles.slice(0, 2); // Get the first 2 articles
  const smallArticle = articles.slice(2, 3); // Get the 3rd article as a small one
  const bottomArticles = articles.slice(3, 6); // Get articles from index 3 to 5 */

  /*   const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredArticles = showAll ? bottomArticles : topArticles; */

  return (
    <div
      className="container mx-auto md:max-w-screen-xl
    pb-10 py-10 md:py-10 lg:py-10 xl:py-10 px-0 bg-gray-000"
    >
      <div className="flex flex-col items-center justify-center bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-200">
          {/* Left side */}
          <div className="col-span-1 grid grid-cols-2 gap-3">
            {leftArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                {/* Your large news card content */}
                <div
                  className={`relative shadow-md hover:shadow-xl 
                  rounded-t-xl rounded-b-xl ${
                    isDarkMode ? "bg-[#101010]" : "bg-white"
                  }`}
                  style={{ maxWidth: "400px" }} // Adjust the width as needed
                >
                  {/* Big card content */}
                  {/* Conditionally render the image or placeholder */}
                  {article.image ? (
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-[225px] max-w-full object-center 
                      sm:object-center md:object-center rounded-t-xl"
                    />
                  ) : (
                    <img
                      src={`http://via.placeholder.com/640x360`}
                      alt=""
                      className="w-full h-[225px] max-w-full object-center 
                      sm:object-center md:object-center rounded-t-xl"
                    />
                  )}

                  {/* Rest of your large card content */}
                  {/* ... */}
                </div>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="col-span-1 bg-green-400">
            {rightArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                {/* Your small news card content */}
                <div
                  className={`relative py-14 shadow-md hover:shadow-xl
                rounded-t-xl rounded-b-xl w-full ${
                  isDarkMode ? "bg-[#101010]" : "bg-white"
                }`}
                  /* style={{ maxWidth: "300px" }} */ // Adjust the width as needed
                >
                  {/* Small card content */}
                  {/* ... */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
