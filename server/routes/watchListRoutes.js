const router = require("express").Router();
const { addToWatchList } = require("../controllers/watchLists");
const auth = require("../middleware/auth");

router.post("/", auth, addToWatchList);

module.exports = router;
