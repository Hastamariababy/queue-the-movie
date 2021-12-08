import "./LoginForm.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/home");
    console.log(props.history);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__h1">Sign In</h1>
      <section className="form__inputs">
        <label className="form__input--label">
          Email
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form__input--label">
          Password
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </section>
      <section className="form__buttons">
        <button type="submit" className="form__buttons--login">
          Sign In
        </button>
        <Link to="/home" className="form__buttons--cancel">
          Cancel
        </Link>
      </section>
      <section className="form__signup">
        <p className="form__signup--ptag">
          Keep track of all movies and shows you want to watch!
        </p>
        <button className="form__signup--button">
          <Link to="/signup">Sign Up</Link>
        </button>
      </section>
    </form>
  );
}

export default LoginForm;
