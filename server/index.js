require("dotenv").config(); //Connecting server to .env file
// Importing requirement
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routers/authRouter")

// Calling and setting up express
const app = express();
app.use(express.json());

// Assigning port value
const port = process.env.PORT || 8000;

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/auth', authRouter)

app.get("/", (req, res) => {
  res.json({ message: "Server de be running" });
});

// Listening to the connection
app.listen(port, () => {
  console.log("listening...");
});
