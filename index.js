const express = require("express");
const path = require("path");
const NewsScraper = require("./models/scraping");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// 테스트
const url = "https://example.com";
const scraper = new NewsScraper(url);
app.get("/", async (req, res) => {
  const { title, content } = await scraper.getContent();
  res.render("index", { title, content });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

