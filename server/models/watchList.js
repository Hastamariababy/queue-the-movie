const watchListData = require("../data/movies.json");
const { response } = require("express");
const fs = require("fs");
const db = require("../databases/connection");
const tableName = "users";
const User = require("../models/user");

let queueList = [];

const queue = () => {
  fs.readFile("./movies.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    queueList = JSON.parse(data);
  });
};
queue();

exports.create = (userId, movieId) => {
  console.log(watchListData);
  queueList.push({ userId: userId, movieId: movieId });
  console.log("Inside watchList model");
  console.log(userId);
  console.log(movieId);
  fs.writeFile("movies.json", JSON.stringify(queueList), (err) => {
    if (err) throw err;
    console.log("Movie saved!");
  });
};
