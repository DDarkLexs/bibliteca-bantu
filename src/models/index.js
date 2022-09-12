import knexModule from 'knex'
import { mySQL } from '../configs'

const knex = knexModule(mySQL);



export default knexModule