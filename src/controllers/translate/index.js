import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import {  } from '../../models'

export default  {
   
    async portugueseToChokwe(req,res,next){
        try {
            


            res.json({
                response:true,
                translation:{
                    primary:'zango',
                    secondary:'amor'
                } })
    
        
        } catch (error) {

            
        }
            
    },
    async portugueseToUmbundu(req,res,next){
        try {
            


            res.json({
                response:true,
                translation:{
                    primary:'epako',
                    secondary:'abacate'
                } })
    
        
        } catch (error) {

            
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