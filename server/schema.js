const { gql } = require("apollo-server");

const typeDefs = gql`

type species {
    id: String
    name: String
    type: String
    description: String
    location: String
    comments: String
}

type customSpecies: {
    animals: species
    status: int
}

type Query {
    Species(species: String): species
}

type Mutation {
    getSpecies(species: String!): String
    addAnimal(name: String, type: String, description: String, 
    location: String, comments: String): customSpecies
}
`;

module.exports = typeDefs;