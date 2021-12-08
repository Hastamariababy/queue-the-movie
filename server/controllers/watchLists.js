const WatchList = require("../models/watchList");

const addToWatchList = (req, res) => {
  console.log(req.body);
  WatchList.create(req.body.userId, req.body.movieId);
  res.json("Hello from addToWatchList");
};

module.exports = { addToWatchList };
