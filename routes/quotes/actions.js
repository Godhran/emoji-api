const Quotes = require("../../data/quotes");

const getQuote = async () => {
  return new Promise(async (resolve) => {
    const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    resolve(randomQuote);
  });
};

module.exports = {
  getQuote,
};
