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
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto max-w-full object-cover mb-2"
              />
              <h2 className="text-xl font-poppins font-bold">
                {article.title}
              </h2>
              <p className="text-gray-600 font-poppins font-light">
                {article.date}
              </p>
              {/* Render other article details here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
