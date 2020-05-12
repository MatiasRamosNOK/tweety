const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const app = express();

var users = {
  0: "Matias",
  1: "Flavia",
};

app.use(function (req, res, next) {
  console.log("Pasaste por use");
  console.log("tiny");
  console.log(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );
  console.log(morgan.tiny);
  next();
  // hacé tu logueo acá.
  // llamá a `next`. Sino tu app recibirá pedidos
  // pero no responderá adecuadamente.
});

app.get("/special/", function (req, res) {
  res.send("Hola estas en special");
  next();
});

app.get("/", function (req, res) {
  console.log("HOla soy get raiz / ");
  res.send("Hello World!");
});
app.get("/is-anybody-in-there", function (req, res) {});
app.post("/modernism", function (req, res) {});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
