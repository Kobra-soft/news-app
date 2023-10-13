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
        console.log("Fetched article data:", articleData); // Added this line for debugging
        setArticle(articleData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // replace this with a loading spinner or message
  }

  return (
    <div className="container md:max-w-screen-xl pt-10 mx-auto mt-0 py-5">
      <div className="bg-white p-0 shadow-md">
        <img
          src={article.image}
          alt={article.title}
          className="w-full object-fill mb-4 lg:h-[600px] lg:w-full"
        />
        <h1
          className="text-2xl text-left px-3
        font-rubik font-extrabold tracking-normal leading-7 text-[#292929]"
        >
          {article.title}
        </h1>
        <div className="mt-4 overflow-x-auto">
          <pre className="text-left whitespace-pre-line font-poppins px-3">
            {article.content}
          </pre>
        </div>
        <p className="mt-4 text-center font-poppins font-bold px-0">
          By {article.author}
        </p>
        <p className="mt-4 text-right font-poppins font-light px-4 pb-3">
          {article.date}
        </p>
      </div>
    </div>
  );
}

export default NewsDetail;
