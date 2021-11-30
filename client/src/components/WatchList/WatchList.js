import React, { useState } from "react";

function WatchList() {
  const { input, setInput } = useState(``);
  return (
    <form>
      <input type="text" placeholder="Enter Movie/TV Show"></input>
    </form>
  );
}

export default WatchList;
