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

module.exports = {
  getCows
}