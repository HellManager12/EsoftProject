/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    {UserId: 1, UserLogin: 'rowValue1',IsAdmin:false,IsBanned:false},
    {UserId: 2, UserLogin: 'rowValue1',IsAdmin:false,IsBanned:false},
    {UserId: 3, UserLogin: 'rowValue1',IsAdmin:false,IsBanned:false},
  ]);
};
