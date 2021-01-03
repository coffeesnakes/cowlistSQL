const express = require("express");
const port = 3003;
const app = express();
const db = require("../database/index.js");
const bodyParser = require("body-parser");
const path = require("path")
const controllers = require('./controllers/cowtrollers.js')

// serving the server
app.use(express.static(path.join(__dirname, "../client/dist")));

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get('/cows', controllers.getCows);
app.post('/cows', controllers.addCow);
app.delete('/cows/:id', controllers.deleteCow);
app.put('/cows/:id', controllers.editCow);

app.listen(port, console.log(`listening on: ${port}`));
