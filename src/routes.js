const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  //return res.send("Hello World");
  res.render('auth/signup')
});

module.exports = routes;
