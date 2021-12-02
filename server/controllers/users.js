const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const signToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

exports.signUpUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 8)
    .then((password) => {
      const userObj = { ...req.body, password: password };
      User.create(userObj).then((user) => {
        console.log(user);
        console.log(user[0]);
        userObj.id = user[0];
        delete userObj.password;
        res
          .status(201)
          .json({ user: userObj, token: signToken(userObj.email) });
      });
    })
    .catch((err) => {
      res.status(400).json({ message: "Please enter required information" });
    });
};

exports.signInUser = (req, res) => {
  let confirmedUser;

  User.findOne({ email: req.body.email })
    .then((user) => {
      confirmedUser = { ...user };
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials." });
      }

      delete confirmedUser.password;
      return res
        .status(200)
        .json({ user: confirmedUser, token: signToken(confirmedUser.email) });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

exports.getCurrentUser = (req, res, next) => {
  User.findOne({ email: req.user }).then((user) => {
    return res.json({ ...user, password: null });
  });
};
