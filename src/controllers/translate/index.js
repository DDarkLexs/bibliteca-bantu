import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import knex from '../../models'
import md5 from 'md5'
import { portuguesParaChokwe,
    portuguesParaUmbundu  } from '../../../enviroment/data.json'
import { ptAndchokweAndumbundu } from '../../../enviroment/newData.json'



export default  {

   
    async universal(req,res,next){
        try {
            
            const { key , palavra , para } = req.query

            const query = (await knex.raw(`
            SELECT
            --portugues.palavra AS portugues, 
            -- umbundu.palavra AS umbundu,
            -- chokwe.palavra AS chokwe,
            ${para}.palavra AS significado,
            ${key}.palavra AS ${key}
            FROM traduzido t
            INNER JOIN portugues ON portugues.id_pt = t.id_pt
            INNER JOIN umbundu ON umbundu.id_umbundu = t.id_umbundu
            INNER JOIN chokwe ON chokwe.id_chokwe = t.id_chokwe
            WHERE ${key}.palavra = "${palavra}";`))[0][0]


            if(!query) throw `Não existe este significado "${palavra}" na base de dados`
           // console.log(query)
       
            res.json({ response:true, query })
                
                
            } catch (error) {

                res.json({ response:false , msg:error })
             
                // console.log(error)
            
        }
            
    },


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
            pt.palavra AS portugues, 
            un.palavra AS umbundu
            FROM portugues pt
            INNER join traduzido t ON pt.id_pt = t.id_pt
            INNER join umbundu un ON un.id_umbundu = t.id_umbundu
            WHERE pt.palavra = '${req.query.palavra}';
            `))[0][0]

            console.log(translation)


            res.json({ response:true, translation })
    
        
        } catch (error) {

            res.json({ response:false, msg: error })
               

            
        }
            
    },
    async portugueseToUmbunduAndChokwe(req,res,next){
        try {
            const translation = (await knex.raw(`
            SELECT 
            pt.palavra AS portugues, 
            un.palavra AS umbundu
            FROM portugues pt
            INNER join traduzido t ON pt.id_pt = t.id_pt
            INNER join umbundu un ON un.id_umbundu = t.id_umbundu
            WHERE pt.palavra = '${req.query.palavra}';
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

            for (let i = 0; i < ptAndchokweAndumbundu.length; i++) { // teste
                const { chokwe,portugues,umbundu } = ptAndchokweAndumbundu[i]; // teste

                // const {  portugues , chokwe } = req.query
                
                const id_pt = await knex('portugues')
                .insert({ palavra:portugues , codigo:md5(portugues) })
                
                const id_chokwe = await knex('chokwe')
                .insert({palavra:chokwe , codigo:md5(chokwe) })
                
                const id_umbundu = await knex('umbundu')
                .insert({palavra:umbundu , codigo:md5(umbundu) })
               
                const id_traduzido = await knex('traduzido')
                .insert({
                    significado:'',
                    descricao:'',
                    id_pt: id_pt[0],
                    id_umbundu: id_umbundu[0],
                    id_chokwe:id_chokwe[0]
                })
                    console.log(`${id_traduzido} -> ${portugues} = ${chokwe} = ${umbundu} [sucesso]`)                    
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