const Movies = require("../../data/movies");

const getMovie = async () => {
  return new Promise(async (resolve) => {
    const randomMovie = Movies[Math.floor(Math.random() * Movies.length)];
    resolve(randomMovie);
  });
};

module.exports = {
  getMovie,
};
