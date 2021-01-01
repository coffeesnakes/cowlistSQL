const db = require("../../database/index.js");

const getCows = (callback) => {
  db.query("select * from cows", callback);
};

module.exports = {
  getCows,
};
