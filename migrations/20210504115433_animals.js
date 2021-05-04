
exports.up = function(knex) {

    return knex.schema.createTable('animals', (table) => {
        table.increments('id').notNullable();
        table.text('species');
        table.text('type');
        table.text('description');
        table.text('location');
        table.text('comments');

    })
};

exports.down = function(knex, Promise) {
  
};
