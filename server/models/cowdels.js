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

const deleteCow = (id, callback) => {
  db.query('select * from cows where id=?', [id],
  (err, select) => {
    if (err) {
      callback(err);
    } else {
      db.query('delete from cows where id=?', [id], callback(err, select));
    }
  });
};

module.exports = {
  getCows,
  addCow,
  deleteCow
};
