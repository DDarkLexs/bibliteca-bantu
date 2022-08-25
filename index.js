/* 
 Um servidor de transferência de biblioteca bantu
*/


import express from 'express'
import cors from 'cors'
import fs from 'fs-extra'
import ip from 'ip'
import ASCIIColorLog from 'ascii-color-log';
import os from "os"

const log = new ASCIIColorLog();

const app = express()

const PORT = 3030
app.use(cors())



app.use(express.static("src/public"))

 
app.listen(PORT, async () => {
        
        console.clear()
        log.info("=============== Biblioteca Bantu ===============")        
        log.info(`Local: 127.0.0.1:${PORT}`)
        log.info(`Rede: ${ip.address()}:${PORT}`)
      

})

