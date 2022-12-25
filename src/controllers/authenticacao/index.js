import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import knex from '../../models'
import md5 from 'md5'
import { gerarSimboloDeAcesso } from "../../configs"

export  default {

   
    async autenticarCliente(req,res,next){
        try {

            const query = (await knex("usuario").select("*")
            .where("nome","=",req.query.nome)
            .andWhere("senha","=",req.query.senha))[0]

            if(!query) throw "O nome ou a palavra-passe está incorreto"

            query.senha = md5(query.senha)
             req.usuario = {}
             Object.assign(req.usuario, query)
            
            
            next()
                
            } catch (error) {
                console.log(error)

                res.sendStatus(404)

        }
            
    },
    async accessGranted(req,res,next){
        try {




           // console.log(req.usuario)
            const token = gerarSimboloDeAcesso(req.usuario)



            res.json({  token })
                
                
            } catch (error) {
                console.log(error)

                res.sendStatus(404)

        }
            
    },
    async registrar(req,res,next){
        try {


            await knex("usuario").insert(req.query)
                
            res.sendStatus(200)
       
                
            } catch (error) {
                console.log(error)

                res.sendStatus(400)
                
        }
            
    },


} 


