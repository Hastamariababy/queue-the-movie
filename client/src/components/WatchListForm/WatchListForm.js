import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./WatchListForm.scss";

function WatchListForm({
  watchInput,
  setwatchinput,
  //   toWatch,
  //   setTowatch,
  handleChange,
}) {
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleChange(e.target.input.value);
  };
  return (
    <form className="wlf__form" onSubmit={onFormSubmit}>
      <input
        className="wlf__input"
        type="text"
        placeholder="Enter movie/tv show..."
        name="input"
        required
        onChange={setwatchinput}
      />
      <button className="wlf__button" type="submit">
        S E A R C H
      </button>
    </form>
  );
}
export default WatchListForm;
