import axios from "axios";
import React, { useState, useEffect } from "react";

const WatchList = () => {
  const [pqueueList, setpqueueList] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/queue").then((response) => {
      setpqueueList(response.data);
    });
  }, []);
  return (
    <div>
      {pqueueList &&
        pqueueList.map((movie) => {
          console.log(movie);
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
            </div>
          );
        })}
    </div>
  );
};

// import { Link } from "react-router-dom";

// const WatchList = ({ movies, setMovies }) => {
//   return (
//     <ul className="video-queue">
//       {movies.queueList
//         .filter((item) => {
//           return item.id !== movies.currentVid.id;
//         })
//         .map((movie) => {
//           return (
//             <li key={movie.id}>
//               // <li>{movie.title}</li>
//               //{" "}
//             </li>
//           );
//         })}
//     </ul>
//   );
// };
export default WatchList;
