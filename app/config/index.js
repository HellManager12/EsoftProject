const control = require("/home/acid/Рабочий стол/EsoftProject/firstVersion/app/controllers/dbController.js");
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
//initialize knex
const knex = require("knex")(knexConfig);

const express = require("express");
const {
  add_new_user,
} = require("/home/acid/Рабочий стол/EsoftProject/firstVersion/app/controllers/dbController.js");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/user", async (req, res) => {
  res.send(await control.getuserInfo(1));
  await add_new_user("suck");
});
