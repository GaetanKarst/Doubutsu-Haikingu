require("dotenv").config();
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./schema");
// const resolver = require("./resolver");
const db = require('../knexfile');
const express = require('express')
const path = require('path');

const server = express();
if (__dirname.slice(-6) === '/build') { 
  server.use(express.static(__dirname))
} else { 
  server.use(express.static('build'))
}

// const server = new ApolloServer({ typeDefs, resolver });

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
// (async () => {
//   try {
//     console.log("Running migrations");
//       // await db.migrate.latest();
//     // await console.log("Running seeds");
//     // await seedDatabase();

//     console.log("Starting express");
//     server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
//   } catch (err) {
//     console.error("Error starting app!", err);
//     process.exit(-1);
//   }
// })();