import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <main className="navbar">
      <div className="navbar__sideone">
        <Link to="/home">
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar__sidetwo">
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link className="navbar__link--movies" to="/movies">
              Movies
            </Link>
          </li>
          <li className="navbar__link">
            <Link className="navbar__link--tvshows" to="/tvshows">
              Tv Shows
            </Link>
          </li>
          <li className="navbar__link">
            <Link className="navbar__link--signin" to="/login">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Navbar;
