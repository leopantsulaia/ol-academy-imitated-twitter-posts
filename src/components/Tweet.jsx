import React, { useState, useEffect } from "react";
import "./Tweet.scss";

const Tweet = ({ username, handle, date, content, hashtag, link }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //API
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='global-div'>
      <aside className='left-section'> sadas</aside>
      <aside className='mid-section'>
        <header className='mid-header-tweet'>What is happening?!</header>
        <nav className='mid-nav-container'>
          {data.map((item) => (
            <div key={item.id} className='mid-section-newsFeed'>
              <div>{item.title}</div>
            </div>
          ))}
        </nav>
      </aside>
      <aside className='right-section'>sadasdas</aside>
    </div>
  );
};

export default Tweet;
