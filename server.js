//jshint esversion:6

const express = require('express');
const app = express();
const bp = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const xoauth = require('xoauth2');

app.use(bp.urlencoded({
  extended: true
}));

//This sets the view engine as EJS
app.set('view engine', 'ejs');
app.use(bp.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("index");
  console.log("redirected to /index.ejs");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
app.use('/css/', express.static("./css/"));
app.use('/javascript/', express.static("./javascript/"));
