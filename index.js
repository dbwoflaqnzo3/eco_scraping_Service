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
const test = async () => {
  const result = await scraper.getContent();
  return result;
};

app.get("/", (req, res) => {
  const content = test(); // await 추가
  res.render("index", { content });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
