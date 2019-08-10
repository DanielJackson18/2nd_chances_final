var db = require('../models');

var path = require('path');

module.exports = function(app) {
  
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/inputForm.html'))
  });

  app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/gallery.html'))
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/login.html'))
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/register.html'))
  });

  app.get("/viewpets", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/viewpets.html'))
  });

  app.get("/viewcat", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/viewcat.html'))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};