const express = require("express");
const app = express();

app.get("/post", (req, res) => {
  res.send("this is post route");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => console.log("Server running on port 8000"));
