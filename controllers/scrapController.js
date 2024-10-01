const NewsScraper = require("../models/scraping");

// 테스트
const url = "https://example.com";
const scraper = new NewsScraper(url);

const scrapController = {
  getmain: async (req, res) => {
    try {
      const { title, content } = await scraper.getContent();
      res.render("index", { title, content });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = scrapController;
