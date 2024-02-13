const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");
const port = process.env.PORT || 5000;


const app = express();
app.use(cors());
// configure dot env
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get all chats
app.get("/api/chats", (req, res) => {
  res.send(chats);
});

// get chat using id
app.get("/api/chats/:id", (req, res) => {
  const id = req.params.id;
  let chat = chats.find((c) => c._id === id);
  res.send(chat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
