const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
  })
);
app.use(express.urlencoded({ extended: false }));

app.post("/shortUrls", (req, res) => {
  console.log(req.body.name);
  console.log("request reaching")
});

app.get("/", (req,res) => { res.send("request sucess") })

app.listen(5000);
