import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpform.scss";

function SignUpform(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const newuser = () => {
    axios
      .post("http://localhost:8080/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        // localStorage.setItem("user", JSON.stringify(response.data));
        props.handleSignIn(response.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/login");
    console.log(props.history);
  }
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="signup-form__h1">Sign Up!</h1>
      <section className="signup-form__inputs">
        <label className="signup-form__input--label">
          Email
          <input
            className="signup-form__input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="signup-form__input--label">
          Password
          <input
            className="signup-form__input"
            type="password"
            placeholder="Enter desired password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </section>
      <section className="signup-form__buttons">
        <button
          onClick={newuser}
          type="submit"
          className="signup-form__buttons--signup"
        >
          Sign Up
        </button>
        <Link to="/home" className="signup-form__buttons--cancel">
          Cancel
        </Link>
      </section>
    </form>
  );
}

export default SignUpform;
