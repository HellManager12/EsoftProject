/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('userstats', function(table){
        table.integer('userid').primary();
        table.integer('wins').notNullable().defaultTo(0);
        table.integer('loses').notNullable().defaultTo(0);
        table.integer('pts').notNullable().defaultTo(0);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
