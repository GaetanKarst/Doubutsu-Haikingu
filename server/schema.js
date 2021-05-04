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

type Query {
    Species(species: String): species
    Type: String
    Description: String
    Location: String
    Comments: String
}

type Mutation {
    getSpecies(species: String!): String
}
`;

module.exports = typeDefs;