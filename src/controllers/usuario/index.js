import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import knex from '../../models'
import md5 from 'md5'


export const getUsuarioData = async (req,res,next) => {
    try {
     
        const query = (await knex('usuario')
        .select("*")
        .where("id_usuario","=",req.usuario.id_usuario))[0]

        res.json(query)
    } catch (error) {
     
        res.sendStatus(404)   

    }
}


