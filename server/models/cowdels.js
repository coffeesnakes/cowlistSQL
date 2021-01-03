const db = require("../../database/index.js");

const getCows = (callback) => {
  db.query("select * from cows", callback);
};

const addCow = (cow, callback) => {
  db.query("insert into cows(name, description) values (?, ?)",
  [cow.name, cow.description], (err, success) => {
    db.query("select * from cows where id=?", [success.insertID], callback)
  });
};

module.exports = {
  getCows,
  addCow
};
