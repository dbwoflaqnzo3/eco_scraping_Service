const axios = require("axios");
const cheerio = require("cheerio");

class NewsScraper {
  constructor(url) {
    this.url = url;
  }

  async getHtml() {
    try {
      return await axios.get(this.url);
    } catch (err) {
      console.log(err);
    }
  }

  async getContent() {
    const html = await this.getHtml();

    if (html) {
      const $ = cheerio.load(html.data);
      const title = $("body > div > h1").text();
      const content = $("body > div > p:nth-child(2)").text();

      return { title, content };
    }
    return null;
  }
}

module.exports = NewsScraper;
