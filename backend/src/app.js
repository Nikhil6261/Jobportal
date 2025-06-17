import express, { urlencoded } from 'express'
import Cors from 'cors'
import env from 'dotenv'
import Router from './router/router.js'
import  cookieParser from 'cookie-parser'
env.config()

const App = express()

App.use(Cors({
   origin: 'http://localhost:5173 ',
  credentials: true                 
}))

App.use( cookieParser() ) 


App.use(express.json())
App.use(urlencoded({extended:true}))

App.use('/user' , Router)

export default App