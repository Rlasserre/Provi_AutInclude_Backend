const knex = require('knex')(
  {
    client: 'pg',
    connection:
    {
      host: 'localhost',
      user: 'postgres',
      database: 'autinclude',
      password: '123456',
    }
  })

module.exports = knex;