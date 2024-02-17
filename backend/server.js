const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRouter = require("./routes/chatRouter");

// configure dot env
dotenv.config();

//connect mongoDB
connectDB()

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// user route 
app.use("/api/user", userRoutes)

//chat route
app.use('/api/chat',chatRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
