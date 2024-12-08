import React, { useState, useEffect } from "react";

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch news on mount or refresh
  useEffect(() => {
    const apiKey = "9c9542e9ac1643ddb7662b803dcdf64e"; // Replace with your actual NewsAPI key
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error("Error fetching data:", error));

    // Cleanup
    return () => {
      console.log("NewsFeed Unmounted");
    };
  }, [refresh]); // Refetch when refresh state changes

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setRefresh(!refresh)}>Refresh News</button>
    </div>
  );
}

export default NewsFeed;
