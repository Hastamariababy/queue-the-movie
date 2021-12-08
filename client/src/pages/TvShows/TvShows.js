import React, { useState, useEffect } from "react";
import "./TvShows.scss";
import axios from "axios";

function TvShows({ DataisLoaded, items }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  console.log(user);

  const handleClick = (userId, movieId, movieTitle) => {
    console.log("inside handleClick");
    console.log(userId);
    console.log(movieId);
    axios
      .post(
        "http://localhost:8080/queue/home",
        { userId: userId, movieId: movieId, movieTitle: movieTitle },
        {
          headers: { authorization: `Bearer: ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!DataisLoaded)
    return (
      <div>
        <h1> loading.... </h1>
      </div>
    );

  return (
    <section className="trendingmovies">
      <h1 className="trendingmovies__h1"> Trending Movies </h1>

      {items.map((item) => (
        <div className="trendingmovies__list" key={item.id}>
          <div className="trendingmovies__left">
            <img
              className="trendingmovies__left--img"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="Movie Poster"
              style={{ width: 100 }}
            />
            <p className="trendingmovies__left--ptag">Users Ratings</p>
            <h5 className="trendingmovies__left--rating">
              {item.vote_average}
            </h5>
            <button
              className="trendingmovies__left--button"
              onClick={() => {
                handleClick(user.user.id, item.id, item.title);
              }}
            >
              Add to Queue!
            </button>
          </div>
          <div className="trendingmovies__right">
            <h3 className="trendingmovies__right--title">{item.title}</h3>
            <p className="trendingmovies__right--overview">{item.overview}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TvShows;
