// const express = require("express");
// const router = express.Router();
// const knex = require("../databases/connection");

// router.post("/", (req, res) => {
//   knex("queue users")
//     .insert(req.body)
//     .then((User) => {
//       res.status(201).json(User);
//     });
// });

// module.exports = router;

const router = require("express").Router();

const auth = require("../middleware/auth");
const {
  signInUser,
  signUpUser,
  getCurrentUser,
} = require("../controllers/users");

/**
 * POST /api/users/signup
 */
router.post("/", signUpUser);

/**
 * POST /api/users/login
 */
router.post("/login", signInUser);

/**
 *  {post} /api/users/current
 * Authentication required
 */
router.get("/current", auth, getCurrentUser);

module.exports = router;
