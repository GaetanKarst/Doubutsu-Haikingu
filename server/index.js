require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolver = require("./resolver");
const db = require('../knexfile');

const server = new ApolloServer({ typeDefs, resolver });

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
