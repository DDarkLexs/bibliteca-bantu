
const knex = require('knex')({
    client: 'mysql',
      connection: {
          port : 3306,
          host: 'localhost',
          user: 'root',
          password : '',
          database : 'biblioteca_bantu'
  }      
});


export default knex