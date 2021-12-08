import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WatchList.scss";

const WatchList = () => {
  const [pqueueList, setpqueueList] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/queue").then((response) => {
      setpqueueList(response.data);
    });
  }, []);
  return (
    <div className="queue">
      {pqueueList &&
        pqueueList.map((movie) => {
          console.log(movie);
          return (
            <div className="queue__list" key={movie.id}>
              <input
                className="queue__checkbox"
                type="checkbox"
                id="myCheck"
                onclick="myFunction()"
              />

              <p className="queue__title">{movie.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default WatchList;
