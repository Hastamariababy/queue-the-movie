const fs = require("fs");
const router = require("express").Router();

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

router.get("/", (_req, res) => {
  const filteredList = queueList.map((video) => {
    return {
      id: video.movieId,
      title: video.movieTitle,
    };
  });
  res.json(filteredList);
});

router.get(`/:id`, (req, res) => {
  const videos = queueList.find((vid) => {
    return vid.id === req.params.id;
  });
  res.json(videos);
});

router.delete("/:id", (req, res) => {
  const movie = queueList.find((vid) => {
    return vid.id === req.params.id;
  });
  res.json(movie);
});

router.post(`/home`, (req, res) => {
  const movie = {
    userId: req.body.userId,
    movieId: req.body.movieId,
    movieTitle: req.body.movieTitle,
  };

  queueList.push(movie);
  console.log("current queuelist", queueList);
  fs.writeFile("./movies.json", JSON.stringify(queueList), (err) => {
    if (err) {
      res.status(500).send("Your update was unsuccesful");
    }
  });
  res.json(queueList);
});

module.exports = router;
