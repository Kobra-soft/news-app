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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div
              className={`relative shadow-md hover:shadow-lg ${borderColor}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 max-w-full object-cover"
              />
              <h2 className="text-base font-poppins font-semibold text-left px-4 py-0 mx-0 my-4 pb-10">
                {article.title}
              </h2>

              <div className="bg-black/90 px-3 py-1 absolute bottom-3 right-3 w-auto">
                <p className="text-xs font-poppins font-normal text-[#B5B5B5]">
                  {article.date}
                </p>
              </div>

              <div className="bg-white/70 px-3 py-1 absolute bottom-3 left-3 w-auto">
                <p className="text-xs font-poppins font-normal text-black">
                  {article.label}
                </p>
              </div>
              <div className="bg-white/70 px-3 py-1 absolute left-3 top-3 w-auto">
                <p className="text-xs font-poppins font-normal text-black">
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
