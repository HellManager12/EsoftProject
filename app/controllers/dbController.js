const knexConfig = {
  client: "postgresql",
  connection: {
    database: "DbforMonopoly",
    user: "acid",
    password: "bkmz099",
    host: "localhost",
    port: 5432,
  },
  migrations: {
    directory: "migrations",
  },
  seeds: {
    directory: __dirname + "/db/seeds",
  },
};
const knex = require("knex")(knexConfig);
//Конфиг кнекса(работает, не лезь)
module.exports = {
  getuserInfo: (id) => {
    return knex("Users")
      .select({
        userlogin: "userlogin",
      })
      .where("userid", id);
  },

  add_new_user: (userLogin, isAdmin = false, isBanned = false) => {
    knex("Users")
      .insert([{ userlogin: userLogin, isadmin: isAdmin, isbanned: isBanned }])
      .returning("userid")
      .then(async function (id) {
        await knex("userstats").insert([
          { userid: id[0].userid, wins: 0, loses: 0, pts: 0 },
        ]);
      });
  },
};
