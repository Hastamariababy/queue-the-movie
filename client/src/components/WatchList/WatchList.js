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

  const handledel = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/queue/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="queue">
      {pqueueList &&
        pqueueList.map((movie) => {
          console.log(movie);
          return (
            <div className="queue__list" key={movie.id}>
              <label for="inputName" class="col-md-1 control-label" />
              <div class="queue__checkbx">
                <input
                  type="checkbox"
                  name="packersOff"
                  id="queue__checkbox"
                  value="1"
                />
                <label for="packers" class="strikethrough">
                  {movie.title}
                </label>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WatchList;
