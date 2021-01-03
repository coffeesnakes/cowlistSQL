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

const editCow = (id, name, callback) => {
  db.query(
    'UPDATE cows set name=? WHERE id=?', [name, id], (err, success) => {
      if (err) {
        callback(err);
      } else {
        db.query(
          'SELECT * FROM cows WHERE id=?', [id], callback
        );
      }
    }
  );
};

module.exports = {
  getCows,
  addCow,
  deleteCow,
  editCow
};
