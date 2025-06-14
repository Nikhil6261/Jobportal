import express, { urlencoded } from 'express'
import Cors from 'cors'
import env from 'dotenv'

env.config()

const App = express()

App.use(Cors())
App.use(express.json())
App.use(urlencoded({extended:true}))

export default App