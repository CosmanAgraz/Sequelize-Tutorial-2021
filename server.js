const express = require("express");
const bodyParser = require("body-parser");

const db = require("./database/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/', require("./routes/index") );

const PORT = 8080;

db.sync()
  .then( 'Done' )
  .catch( (err) => console.log(`Error: ${err}`) );

db.authenticate().then( console.log('Connection has been established successfully.') )
  .catch( (err) => console.log(`Error: ${err}`) );

app.listen( PORT, () => { console.log(`Listening on port: ${PORT}`); });

//Routes, move these later

app.get("/", (req, res, next) => {
  console.log('hit / endpoint');
    db.models.classification.get( {attributes: ['id'], where: { classification: 'mega'} });
});

//handle 404
app.use( (req, res) => { res.status(404) } );