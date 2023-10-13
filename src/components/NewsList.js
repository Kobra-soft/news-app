import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// --------------------------------------------------------------------------------
// TO CLEAN CODE COMMENTS BELOW --- AFTER LAYOUT DONE FOR WEB / MOBILE / TABLET ETC
// --------------------------------------------------------------------------------

/* import clockIconLight from "../icons/time-outline-light.svg";
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
import chevronRightDarkIcon from "../icons/chevron-back-outline.svg"; */

// --------------------------------------------------------------------------------

function NewsList({ isDarkMode }) {
  // --------------------------------------------------------------------------------

  /*   const [articles, setArticles] = React.useState([]);
  const [articles2, setArticles2] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const clockIcon = isDarkMode ? clockIconDark : clockIconLight; */

  // --------------------------------------------------------------------------------

  const [leftArticles, setLeftArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);

  useEffect(() => {
    const apiKey = "f6b499e9ef0d7e84bc4b01cd73323fb3";
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=f6b499e9ef0d7e84bc4b01cd73323fb3&languages=en&countries=gb&limit=30`;

    // Fetch data from data2.json for the left side
    axios.get("/data2.json").then((response) => {
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

  // Function to format the relative time
  /*   function formatRelativeTime(publishedAt) {
    const now = new Date();
    const diffInMilliseconds = now - new Date(publishedAt);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (diffInMilliseconds < 60000) {
      // Less than a minute ago
      const seconds = Math.round(diffInMilliseconds / 1000);
      return rtf.format(-seconds, "second");
    } else if (diffInMilliseconds < 3600000) {
      // Less than an hour ago
      const minutes = Math.round(diffInMilliseconds / 60000);
      return rtf.format(-minutes, "minute");
    } else if (diffInMilliseconds < 86400000) {
      // Less than a day ago
      const hours = Math.round(diffInMilliseconds / 3600000);
      return rtf.format(-hours, "hour");
    } else {
      // More than a day ago
      const days = Math.round(diffInMilliseconds / 86400000);
      return rtf.format(-days, "day");
    }
  } */

  // Function to format the date in UK format (DD/MM/YY)
  /*   function formatUKDate(publishedAt) {
    const date = new Date(publishedAt);
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  } */

  // Function to format the date and time in UK format (DD/MM/YY HH:mm)
  /*   function formatUKDateTime(publishedAt) {
    const date = new Date(publishedAt);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const datePart = date.toLocaleDateString("en-GB", options); */
  /* const timePart = date.toLocaleTimeString("en-GB", options); */

  /* return `${datePart} `; */
  /* return `${datePart} ${timePart}`; */
  /*   } */

  function formatCustomDateTime(inputDateTime) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(inputDateTime);
    const formattedDate = date.toLocaleDateString("en-US", options);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    <div
      className="container mx-auto md:max-w-screen-2xl
    pb-10 py-10 md:py-10 lg:py-10 xl:py-10 px-0 bg-gray-000"
    >
      <div className="flex flex-col items-center justify-center bg-gray-000">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-000">
          {/* Left side */}
          <div className="col-span-2">
            {leftArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                {/* Your large news card content */}
                <div
                  style={{ alignItems: "center" }}
                  className={` mb-3 relative shadow-md hover:shadow-lg rounded-t-xl rounded-b-xl flex ${
                    isDarkMode ? "bg-[#101010]" : "bg-white"
                  }`}
                >
                  {/* Left side (Image) */}
                  <div className="rounded-tl-xl rounded-bl-xl overflow-hidden h-[150px] w-[150px]">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={`http://via.placeholder.com/150x225`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Right side (Content) */}
                  <div className="flex-1 px-4 align-middle">
                    {/* Source */}
                    <p className="text-left text-xs text-gray-700 font-inter">
                      {/* {article.category} · */} {article.source}
                    </p>

                    {/* Title */}
                    <h2
                      className="mt-1 text-left text-xl font-extrabold font-ptsans 
                      transition-all duration-300 hover:text-red-500 leading-tight
                      line-clamp-2"
                      style={{
                        maxWidth: "55ch",
                        /* maxHeight: "2.5rem", */
                        overflow: "hidden",
                      }}
                    >
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-left text-sm mt-1 text-gray-800 font-inter 
                    line-clamp-2"
                      style={{
                        maxWidth: "80ch",
                        /* maxHeight: "2.5rem", */
                        overflow: "hidden",
                      }}
                    >
                      {article.description}
                    </p>

                    {/* Published Date */}
                    <p className="text-left text-xs mt-2 text-gray-500 font-inter">
                      {/* {formatRelativeTime(article.published_at)} */}
                      {/* {formatUKDate(article.published_at)} */}
                      {/* {formatUKDateTime(article.published_at)} */}
                      Published: {formatCustomDateTime(article.published_at)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="col-span-1 bg-gray-200 mb-0 w-[420px]">
            {rightArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                {/* Your small news card content */}
                <div
                  className={`relative py-[75px] shadow-md hover:shadow-xl
          rounded-t-xl rounded-b-xl w-full mb-3 ${
            isDarkMode ? "bg-[#101010]" : "bg-white"
          }`}
                >
                  {/* Small card content py-[115.5px] */}
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
