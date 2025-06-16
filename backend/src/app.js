import express, { urlencoded } from 'express'
import Cors from 'cors'
import env from 'dotenv'
import Router from './router/router.js'
import  cookieParser from 'cookie-parser'
env.config()

const App = express()

App.use(Cors({
  origin: 'http://localhost:5173',  // ✅ Your React app URL
  credentials: true                 // ✅ Allow cookies to be sent
}))

App.use( cookieParser() ) 

App.use(express.json())
App.use(urlencoded({extended:true}))

App.use('/user' , Router)

export default App