const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/usrroute");
const app = express();
const PORT = process.env.PORT ||3003

app.use(express.json());

mongoose
  .connect(
   "mongodb+srv://kaler:mIp0cb9Dzd9bRey3@cluster0.dvnvnj9.mongodb.net/socialMedia",
    {
      useNewUrlParser: true,
    }
  )

  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(PORT, function () {
  console.log("server app listening on port " + PORT);
});