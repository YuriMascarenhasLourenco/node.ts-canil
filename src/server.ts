import express from 'express'
import helmet from 'helmet'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import path from 'path'
import mainRoute from './routes/index'

dotenv.config()
const server = express()

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname, '../public')))
server.use(helmet())
//routes
server.use(mainRoute);
server.use((req,res)=>{
    console.log('página não encontrada')
})

server.listen(process.env.PORT)