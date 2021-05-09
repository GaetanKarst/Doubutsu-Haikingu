require("dotenv").config();
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./schema");
// const resolver = require("./resolver");
const db = require('./knexfile');
const express = require('express')
const path = require('path');

const server = express();
server.use(express.static(path.join(__dirname, 'build')));
 
// const server = new ApolloServer({ typeDefs, resolver });
server.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build'))
})

server.get('/api', async(req, res) => {
    const query = await db.select().table('animals');
    // res.status(200);
    // res.send(query);
    res.send(query);
    res.status(200)
})

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();
    // await console.log("Running seeds");
    // await seedDatabase();

    console.log("Starting express");
    server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();