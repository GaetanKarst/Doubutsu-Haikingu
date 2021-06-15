require("dotenv").config();
const db = require('./knexfile');
const express = require('express')
const path = require('path');

const server = express();
server.use(express.static(path.join(__dirname, 'build')));
 
server.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build'));
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

(async () => {
  try {
    console.log("Starting express");
    server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();