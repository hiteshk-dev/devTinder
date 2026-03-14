const express = require('express')
const app = express()

const {adminAuth,userAuth} = require('./middlewares/auth')

//Auth Middleware for all requests
app.use('/admin', adminAuth)

app.get("/user/login",(req,res)=>{
    res.send("User logged in successfully!")
})
//single api for authorization
app.get('/user/data',userAuth,(req,res)=>{ 
    res.send("User Data") 
})

app.get('/admin/getAllData',(req,res)=>{
    res.send('All Data')
})

app.delete('/admin/deleteAllData',(req,res)=>{
    res.send('Delete Data')
})

app.listen(7777)