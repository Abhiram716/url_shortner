const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ShortUrl = require("./models/shortUrl");
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

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
//form-urlencoded

app.get("/", async(req, res) => {
  let shortUrls = await shortUrl.find();
  res.send(shortUrls);
});

app.post("/shortUrls",  async (req, res) => {
  await ShortUrl.create({ full: req.body.url });
  console.log(req.body.url)
  res.send("req send succesfully");
  res.redirect("/");
});

app.listen(5000);
