
const knex = require('knex')({
    client: 'mysql',
      connection: {
          port : 3306,
          host: '192.168.2.1',
          user: 'root',
          password : '',
          database : 'biblioteca_bantu'
  }      
});


export default knex