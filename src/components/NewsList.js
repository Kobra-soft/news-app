import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewsList({ isDarkMode, toggleDarkMode }) {
  const [articles, setArticles] = React.useState([]);
  const borderColor = isDarkMode
    ? "border-white border-b-2"
    : "border-white border-b-2";

  React.useEffect(() => {
    // Fetch data from your JSON file or an API using axios
    axios.get("/data.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto py-2 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div
              className={`relative shadow-md hover:shadow-lg ${borderColor}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 max-w-full object-cover mb-0"
              />
              <h2 className="text-base font-poppins font-semibold text-left px-3 py-1.5">
                {article.title}
              </h2>
              <p className="text-xs font-poppins font-normal text-teal-400 px-3">
                {article.author} | {article.date}
              </p>
              <div className="bg-white/70 px-3 py-0.5 rounded-e-full absolute bottom-1.5 left-0 w-auto">
                <p className="text-xs font-poppins font-normal text-black">
                  {article.label}
                </p>
              </div>
              <div className="bg-black/90 px-3 py-0.5 rounded-e-full absolute right-2 top-2 w-auto">
                <p className="text-xs font-poppins font-normal text-white">
                  {article.genre}
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
