const models = require ('../models/cowdels.js')

const getCows = (req, res) => {
  models.getCows((err, cows) => {
    if (err){
      res.status(400).send(err);
    } else {
      res.status(200).send(cows);
    }
  })
}

const addCow = (req, res) => {
  models.addCow(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}



module.exports = {
  getCows,
  addCow
}