require("dotenv").config();
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./schema");
// const resolver = require("./resolver");
const db = require('../knexfile');
const express = require('express')
const path = require('path');

const server = express();
server.use(express.static(path.join(__dirname, '../build')));
 
// const server = new ApolloServer({ typeDefs, resolver });
server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'))
})

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