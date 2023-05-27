import React, { useState, useEffect } from "react";
import "./Tweet.scss";

const Tweet = () => {
  const [data, setData] = useState([]);
  const [picData, setPicData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPicData(json));
  }, []);

  return (
    <div className='global-div'>
      <aside className='left-section'> sadas</aside>
      <aside className='mid-section'>
        <header className='mid-header-tweet'>What is happening?!</header>
        <nav className='mid-nav-container'>
          {data.map((user) => (
            <div
              key={user.id}
              className='mid-section-newsFeed'
            >
              <div>
                <h1> {user.title} </h1>
                <div>user?id={user.id} </div>
                <div>
                  <img
                    src={picData[user.id].thumbnailUrl}
                    alt=''
                  />
                </div>
              </div>

              <p>{user.body}</p>
            </div>
          ))}
        </nav>
      </aside>
      <aside className='right-section'>sadasdas</aside>
    </div>
  );
};

export default Tweet;
