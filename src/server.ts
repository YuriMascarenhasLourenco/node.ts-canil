import express from 'express'
import helmet from 'helmet'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import path from 'path'
import mainRoute from './routes/index'

dotenv.config();

const server = express()

server.engine('mustache',mustache())
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));

server.use(express.static(path.join(__dirname, '../public')))
server.use(helmet())

//routes
server.use(mainRoute)
server.use((req,res)=>{
    res.render('pages/404')
})

server.listen(process.env.PORT)