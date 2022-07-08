// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
*/
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'DbforMonopoly',
      user: 'acid',
      password:'bkmz099',
      host:'localhost',
      port:5432,
    },
    migrations:{
      directory:'migrations',
    },
    seeds:{
      directory: __dirname+'/db/seeds',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'DbforMonopoly',
      user: 'acid',
      password:'bkmz099',
      host:'localhost',
      port:5432,
    },
    migrations:{
      directory:'migrations',
    },
    seeds:{
      directory: __dirname+'/db/seeds',
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'DbforMonopoly',
      user: 'acid',
      password:'bkmz099',
      host:'localhost',
      port:5432,
    },
    migrations:{
      directory:'migrations',
    },
    seeds:{
      directory: __dirname+'/db/seeds',
    }
  }

};
