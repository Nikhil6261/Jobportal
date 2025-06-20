import express from 'express'
import { jobdata, login, register , getjobdata, getjobdetail } from '../controller/userController.js'
import { verifyToken } from '../controller/middleware.js'

const Router = express.Router()

Router.get('/', (req,res)=>{
res.send("appliction is runing ")
})


Router.post('/register', register)

Router.post('/login', login)

Router.get('/dashboard', verifyToken, (req, res) => {
    res.status(200).send(`Hello ${req.user.name}, welcome to your dashboard`);
})

Router.get('/jobdashboard', verifyToken, (req, res) => {
    res.status(200).send(`Hello ${req.user.name}, welcome to your dashboard`);
})


Router.post('/job/post', verifyToken ,jobdata )

Router.post('/post', getjobdata)

Router.get('/postuser', getjobdetail)

export default Router