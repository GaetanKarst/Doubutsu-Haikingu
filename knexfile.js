const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
      connectionString:
        process.env.DATABASE_URL ||
        `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PW}@127.0.0.1:5432/animals`
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: 'knex_migrations'
    }
})
module.exports = db;

