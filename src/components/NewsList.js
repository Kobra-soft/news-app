import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewsList({ isDarkMode, toggleDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const borderColor = isDarkMode
    ? "border-black border-b"
    : "border-[#b5b5b5] border-b-2";

  React.useEffect(() => {
    // Fetch data from your JSON file or an API using axios
    axios.get("/data.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto py-5 px-0 bg-[#eaeaea]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            {/*  NEWSLIST TITLE CONTENT SECTION!! */}
            <div
              className={`relative shadow-md hover:shadow-xl bg-white ${borderColor}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 max-w-full object-cover"
              />
              {/* TITLE */}
              <h2 className="text-[18px] font-inter font-extrabold text-left px-4 py-0 mx-0 my-4 pb-10">
                {article.title}
              </h2>

              {/* GENRE = FOOTBALL, F1 ETC */}
              <div className="bg-black/90 px-3 py-1 absolute left-0 top-3 w-auto border-b border-t border-e border-[#b5b5b5] rounded-e-sm">
                <p className="text-xs font-poppins font-normal text-[#B5B5B5]">
                  {article.genre}
                </p>
              </div>

              {/* CLUB / PLAYER ETC */}
              <div className="bg-white/70 px-3 py-1 absolute bottom-3 left-3 w-auto border border-black rounded-sm">
                <p className="text-xs font-poppins font-normal text-black">
                  {article.label}
                </p>
              </div>

              {/* DATE */}
              <div className="bg-black/90 px-3 py-1 absolute bottom-3 right-3 w-auto border border-[#b5b5b5] rounded-sm">
                <p className="text-xs font-poppins font-normal text-[#B5B5B5]">
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
