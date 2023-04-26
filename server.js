const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const cors = require("cors");
const shortUrl = require("./models/shortUrl");

const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: false }));

app.post("/shortUrls", async(req, res) => {
  await shortUrl.create({ full: req.body.url })
  res.redirect('/');
});

app.get("/", (req,res) => { res.send("request sucess") })

app.listen(5000);
