const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const app = express();
const nunjucks = require("nunjucks");

var users = {
  0: "Matias",
  1: "Flavia",
};

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
// hacé tu logueo acá.
// llamá a `next`. Sino tu app recibirá pedidos
// pero no responderá adecuadamente.

app.get("/special/", function (req, res) {
  res.send("Hola estas en special");
  next();
});

app.get("/", function (req, res) {
  const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
  res.render("index", { title: "Hall of Fame", people: people });
});
app.get("/is-anybody-in-there", function (req, res) {});
app.post("/modernism", function (req, res) {});

app.listen(3001, function () {
  console.log("Example app listening on port 3000!");
});

var locals = {
  title: "An Example",
  people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }],
};
nunjucks.configure("views", { noCache: true });

app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates
