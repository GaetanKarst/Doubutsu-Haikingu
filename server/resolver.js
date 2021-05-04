const db = require('../knexfile');

module.exports = {
    Query: {
        Species: (species) => {
            db.select()
            .from('animals')
            .where('species', species);
        }

        
    },

    Mutation: {

    }

}