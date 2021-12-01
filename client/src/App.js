import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import LoginForm from "./components/LogInForm/LoginForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/signin" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
