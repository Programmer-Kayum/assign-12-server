const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const course = require("./courses.json");
app.get("/", (req, res) => {
  res.send("api running!");
});

//get api all topics
app.get("/course", (req, res) => {
  res.send(course);
});

// get topics by id
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedItem = course.find((p) => p.id == id);
  res.send(selectedItem);
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

module.exports = app;
