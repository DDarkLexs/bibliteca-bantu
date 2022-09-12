import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import knex from '../../models'
import md5 from 'md5'
export default  {
   
    async portugueseToChokwe(req,res,next){
        try {
            

            const data = await knex('portugues')
            .select('*')

            
            res.json(data)
                
                
            } catch (error) {
                
                console.log(error)
            
        }
            
    },
    async portugueseToUmbundu(req,res,next){
        try {
            const data = (await knex.raw(`
            SELECT 
            pt.palavra as portugues, 
            un.palavra as umbundu
            FROM portugues pt
            INNER join traduzido t ON pt.id_pt = t.id_pt
            INNER join umbundu un ON un.id_umbundu = t.id_umbundu;
            `))[0]


            res.json({
                response:true,
                translation: data })
    
        
        } catch (error) {

            res.json({ response:false, msg: error })
               

            
        }
            
    },
    async insertportugueseToUmbundu(req,res,next){
        try {

            const {  palavra } = req.query
            const id_pt = await knex('portugues')
            .insert({ palavra:palavra[0] , codigo:md5(palavra[0]) })
            
            const id_umbundu = await knex('umbundu')
            .insert({palavra:palavra[1] , codigo:md5(palavra[1]) })
           
            const id_chokwe = await knex('chokwe')
            .insert({palavra:'nulo' , codigo:'nulo' })
            
            const id_traduzido = await knex('traduzido')
            .insert({
                significado:'',
                descricao:'',
                id_pt: id_pt,
                id_umbundu: id_umbundu,
                id_chokwe:id_chokwe
            })
            

            res.json({ response:true, query: {id_chokwe,id_umbundu,id_pt } })
                
                
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