require('dotenv').config(); 
const express = require("express");

const app = express();

const port = process.env.PORT || 8000

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server de be running" });
});

app.listen(port, () => {
  console.log("listening...");
});
