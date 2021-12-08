if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 8080;
const watchListRoutes = require("./routes/watchListRoutes");
const queueList = require("./routes/queueRoutes");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/signup", userRoutes);
app.use("/watchlists", watchListRoutes);

app.use("/queue", queueList);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
