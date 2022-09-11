import knex from 'knex'
import { mySQL } from '../configs'

const database = knex( mySQL );



export default database 