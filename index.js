require("dotenv").config();
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./schema");
// const resolver = require("./resolver");
const db = require('./knexfile');
const express = require('express')
const path = require('path');
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '172cf9bd01333d2c65966e1f80bc7694e1a9f5f8e0bb4d95dc84d0ef4bd1e4d9',
  baseURL: 'http://localhost:4000',
  clientID: 'GeYnY8Z5rNuZSfG9BPlNFwWi4Lm15NGI',
  issuerBaseURL: 'https://dev-r8l5-h8g.jp.auth0.com'
};

const server = express();
server.use(auth(config));
server.use(express.static(path.join(__dirname, 'build')));
server.use(express.json())

server.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// const server = new ApolloServer({ typeDefs, resolver });
server.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build'));
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

server.get('/api', async(req, res) => {
    const query = await db.select().table('animals');
    // res.status(200);
    // res.send(query);
    res.send(query);
    res.status(200)
});

server.post('/api', async(req, res) => {
    try {
        console.log('Body is ', req.body);
        await db('animals').where('email', req.body.email).insert(req.body.image);
        res.status(200);
    }
    catch(e){
        console.log('ERROR', e)
    }
});

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