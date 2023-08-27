import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON file or an API using axios
    axios
      .get("/data.json")
      .then((response) => {
        const articleData = response.data.find(
          (item) => item.id === parseInt(id)
        );
        console.log("Fetched article data:", articleData); // Add this line for debugging
        setArticle(articleData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <div className="container lg:w-[900px] mx-auto mt-8">
      <div className="bg-white p-4 rounded shadow-md">
        <img
          src={article.image}
          alt={article.title}
          className="w-full object-fill mb-4 lg:h-[600px] lg:w-full"
        />
        <h1 className="text-2xl font-poppins font-bold">{article.title}</h1>
        <p className="text-gray-600 font-poppins">{article.date}</p>
        <div className="mt-4 overflow-x-auto">
          <pre className="text-left whitespace-pre-line font-poppins">
            {article.content}
          </pre>
        </div>
        <p className="mt-4 font-poppins font-bold">Author: {article.author}</p>
      </div>
    </div>
  );
}

export default NewsDetail;
