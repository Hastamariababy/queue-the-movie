import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import LoginForm from "./components/LogInForm/LoginForm";
import SignUpform from "./components/SignUpform/SignUpform";
import WatchListForm from "./components/WatchListForm/WatchListForm";
import WatchList from "./components/WatchList/WatchList";
import { useState, useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [watchinput, setwatchinput] = useState(null);
  const [user, setUser] = useState(null);
  const [DataisLoaded, setDataisLoaded] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    console.log(storedUser);
    setUser(storedUser);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6371376302b03dd81727cc2273fd3ac4&language=en-US&page=1"
    ).then((response) => {
      response.json().then((result) => {
        console.log(result.results);
        setDataisLoaded(true);
        setItems(result.results);
      });
    });

    if (watchinput !== null) {
      console.log(watchinput);
      let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=6371376302b03dd81727cc2273fd3ac4&language=en-US&page=1&include_adult=false&query=${watchinput}`;
      console.log(API_URL);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6371376302b03dd81727cc2273fd3ac4&language=en-US&page=1&include_adult=false&query=${watchinput}`
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
          setDataisLoaded(true);
          setItems(result.results);
        });
      });
    }
  }, [setUser, watchinput]);

  const handleSignIn = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
    setUser(JSON.parse(localStorage.getItem("user")));
  };

  const handleChange = (movie) => {
    // console.log(movie);
    setwatchinput(movie);
  };

  const handleAdd = (param) => {
    console.log("Inside App.js handleAdd");
  };
  return (
    <Router>
      <Navbar />
      <WatchListForm handleChange={handleChange} />
      <Routes>
        <Route path="/home" element={<Home queueList={items} />}></Route>
        <Route
          path="/movies"
          element={
            <Movies
              items={items}
              DataisLoaded={DataisLoaded}
              handleAdd={handleAdd}
            />
          }
        ></Route>
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route
          path="/signup"
          element={<SignUpform handleSignIn={handleSignIn} />}
        />
        <Route
          path="/myqueue"
          element={
            <PrivateRoute>
              <WatchList user={user} movies={items} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
