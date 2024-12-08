import React, { useState, useEffect } from "react";

function NewsFeed() {
  const [news, setNews] = useState([]); // State to store news articles
  const [refresh, setRefresh] = useState(false); // State to trigger news refresh

  // Fetch news on mount and refresh
  useEffect(() => {
    // API call to fetch news data
    fetch("https://api.example.com/news")
      .then((res) => res.json()) // Parse the response to JSON
      .then((data) => setNews(data.articles)); // Update the state with fetched data

    // Cleanup function that runs when component is unmounted or before rerun
    return () => {
      console.log("NewsFeed Unmounted"); // This logs when the component unmounts or refreshes
    };
  }, [refresh]); // Dependency array that triggers effect when 'refresh' changes

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li> // Render each news article
        ))}
      </ul>
      <button onClick={() => setRefresh(!refresh)}>Refresh News</button>{" "}
      {/* Button to trigger refresh */}
    </div>
  );
}

export default NewsFeed;
