const keys = require('../keys');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express Setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000

// Postgres setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

pgClient.on('connect', () => {
  console.log('Connection established')
});


app.get('/', (req,res) => {
  res.send("Terve")
})

app.get('/quotes', (req,res) => {
  pgClient
    .query(`SELECT * FROM quotes;`)
    .then(results => 
      res.status(200).send(JSON.stringify(results.rows))
    )
    .catch(err => console.log(err))
})

app.listen(PORT, () => {
  console.log(`
    NodeJS backend API is running in http://localhost:${PORT}.
  `)
})