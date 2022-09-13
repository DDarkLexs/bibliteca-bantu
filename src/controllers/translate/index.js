import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import knex from '../../models'
import md5 from 'md5'
import { portuguesParaChokwe,
    portuguesParaUmbundu  } from '../../../enviroment/data.json'

export default  {

   
    async portugueseToChokwe(req,res,next){
        try {
            

            const translation = (await knex.raw(`
            SELECT 
            pt.palavra as portugues, 
            un.palavra as chokwe
            FROM portugues pt
            INNER join traduzido t ON pt.id_pt = t.id_pt
            INNER join chokwe un ON un.id_chokwe = t.id_chokwe
            where pt.palavra = '${req.query.palavra}';
            `))[0][0]


            console.log(translation)

            res.json({ response:true, translation })
                
                
            } catch (error) {
                
                console.log(error)
            
        }
            
    },

    async insertportugueseTochokwe(req,res,next){
        try {


                const {  portugues , chokwe } = req.query
                
                const id_pt = await knex('portugues')
                .insert({ palavra:portugues , codigo:md5(portugues) })
                
                const id_chokwe = await knex('chokwe')
                .insert({palavra:chokwe , codigo:md5(chokwe) })
                
                const id_umbundu = await knex('umbundu')
                .insert({palavra:null , codigo:md5('nulo') })
               
                const id_traduzido = await knex('traduzido')
                .insert({
                    significado:'',
                    descricao:'',
                    id_pt: id_pt[0],
                    id_umbundu: id_umbundu[0],
                    id_chokwe:id_chokwe[0]
                })
                    
            
            

            

            res.json({ response:true, query: {id_chokwe,id_umbundu,id_pt } })
                
                
            } catch (error) {

                res.json({ response:false, msg:error })
                
                
        }
            
    },

    async portugueseToUmbundu(req,res,next){
        try {
            const translation = (await knex.raw(`
            SELECT 
            pt.palavra as portugues, 
            un.palavra as umbundu
            FROM portugues pt
            INNER join traduzido t ON pt.id_pt = t.id_pt
            INNER join umbundu un ON un.id_umbundu = t.id_umbundu
            where pt.palavra = '${req.query.palavra}'
            ;
            `))[0][0]

            console.log(translation)


            res.json({ response:true, translation })
    
        
        } catch (error) {

            res.json({ response:false, msg: error })
               

            
        }
            
    },


    async insertportugueseToUmbundu(req,res,next){
        try {

                const {  portugues , umbundu } = req.query
                const id_pt = await knex('portugues')
                .insert({ palavra:portugues , codigo:md5(portugues) })
                
                const id_umbundu = await knex('umbundu')
                .insert({palavra:umbundu , codigo:md5(umbundu) })
               
                const id_chokwe = await knex('chokwe')
                .insert({palavra:null , codigo:md5('nulo') })
                
                const id_traduzido = await knex('traduzido')
                .insert({
                    significado:'',
                    descricao:'',
                    id_pt: id_pt[0],
                    id_umbundu: id_umbundu[0],
                    id_chokwe:id_chokwe[0]
                })
    

            

            res.json({ response:true, query: {id_chokwe,id_umbundu,id_pt } })
                
                
            } catch (error) {

                res.json({ response:false, msg:error })
                
                
        }
            
    },

    async insertAll(req,res,next){
        try {

            for (let i = 0; i < portuguesParaChokwe.length; i++) { // teste
                const { chokwe,portugues } = portuguesParaChokwe[i]; // teste

                // const {  portugues , chokwe } = req.query
                
                const id_pt = await knex('portugues')
                .insert({ palavra:portugues , codigo:md5(portugues) })
                
                const id_chokwe = await knex('chokwe')
                .insert({palavra:chokwe , codigo:md5(chokwe) })
                
                const id_umbundu = await knex('umbundu')
                .insert({palavra:null , codigo:md5('nulo') })
               
                const id_traduzido = await knex('traduzido')
                .insert({
                    significado:'',
                    descricao:'',
                    id_pt: id_pt[0],
                    id_umbundu: id_umbundu[0],
                    id_chokwe:id_chokwe[0]
                })
                    
            }

            for (let i = 0; i < portuguesParaUmbundu.length; i++) { // teste
                const { umbundu , portugues } = portuguesParaUmbundu[i]; // teste

                // const {  portugues , umbundu } = req.query
                const id_pt = await knex('portugues')
                .insert({ palavra:portugues , codigo:md5(portugues) })
                
                const id_umbundu = await knex('umbundu')
                .insert({palavra:umbundu , codigo:md5(umbundu) })
               
                const id_chokwe = await knex('chokwe')
                .insert({palavra:null , codigo:md5('nulo') })
                
                const id_traduzido = await knex('traduzido')
                .insert({
                    significado:'',
                    descricao:'',
                    id_pt: id_pt[0],
                    id_umbundu: id_umbundu[0],
                    id_chokwe:id_chokwe[0]
                })
                
            }


            

            res.json({ response:true, /* query: {id_chokwe,id_umbundu,id_pt } */ })
                
                
            } catch (error) {

                res.json({ response:false, msg:error })
                
                
        }
            
    },

    

} 



/* pt - umbundu
    {
        response:Boolean,
        translation:{
            primary:String,
            secondary:String
        }
    }

    */