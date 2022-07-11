module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: "nome_do_seu_banco_de_dados",
        user: "postgres",
        password: "senha_do_seu_banco_de_dados"
      },
      migrations:{
        directory: `${__dirname}/src/databaseKnex/migrations`
      
    },
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };