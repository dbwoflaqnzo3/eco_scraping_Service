const NewsScraper = require("../models/scraping.js");

const url = "https://example.com";
const scraper = new NewsScraper(url);

const test = async () => {
  const result = await scraper.getContent();
  console.log(result);
};
test();
