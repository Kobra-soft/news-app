import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewsList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from your JSON file or an API using axios
    axios.get("/data.json").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div className="relative bg-[#747474] p-[1px] rounded shadow-md hover:shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 max-w-full object-cover mb-0"
              />
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="bg-black bg-opacity-0 p-[1px] rounded text-center top-10 absolute inset-0 flex items-center justify-center">
                  <h2 className="text-base font-inter font-black bg-transparent/60 text-white px-3">
                    {article.title}
                  </h2>
                </div>
                <div className="bg-[#ebebebdd] text-white absolute bottom-2 left-2 w-auto px-2 py-1">
                  {/* <p className="text-xs font-inter font-normal mb-1">
                    Date: {article.date}
                  </p> */}
                  <p className="text-xs font-inter font-normal text-black">
                    {article.author}
                  </p>
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
