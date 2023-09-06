import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewsList({ isDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const borderColor = isDarkMode
    ? "border-[#b5b5b5] border-b"
    : "border-gray-400 border-b";

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
            <div
              className={`relative shadow-md hover:shadow-xl hover:border ${borderColor}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[244px] max-w-full object-cover"
              />
              {/* TITLE */}

              {/* This div controls the background color */}
              <div
                className={`h-40 ${
                  isDarkMode
                    ? "bg-[#101010]"
                    : "bg-white" /* This should change text color in dark mode */
                }`}
              >
                <h2
                  className={`text-[22px] font-ibmplexsans font-extrabold tracking-tighter leading-7
                  text-left pl-3 px-3 py-4 ${
                    isDarkMode
                      ? "text-white"
                      : "text-black" /* This should change text color */
                  }`}
                >
                  {article.title}
                </h2>
              </div>

              {/* GENRE = FOOTBALL, F1 ETC */}
              {/*               <div className="bg-black/80 px-3 py-1 absolute left-4 top-3 w-auto border border-[#B5B5B5] rounded-e-sm">
                <p className="text-xs font-poppins font-normal text-[#ffffff]">
                  {article.genre}
                </p>
              </div> */}

              {/* GENRE */}
              <div
                className={`bg-black/80 px-3 py-1 absolute left-3 top-3 w-auto border border-[#B5B5B5] 
                rounded-e-sm text-xs font-poppins font-normal ${
                  isDarkMode
                    ? "text-black bg-white/90"
                    : "text-white bg-black/80"
                }`}
              >
                <p>{article.genre}</p>
              </div>

              {/* CLUB / PLAYER ETC */}
              <div className="bg-white/70 px-3 py-1 absolute bottom-3 left-3 w-auto border border-black rounded-sm">
                <p className="text-xs font-poppins font-normal text-black">
                  {article.label}
                </p>
              </div>

              {/* /* DATE */}
              <div className=" px-0 py-1 absolute bottom-3 right-3 w-auto">
                <p className="text-xs font-poppins font-normal text-[#7a7a7a]">
                  {article.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
