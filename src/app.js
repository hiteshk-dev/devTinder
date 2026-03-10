const express = require('express') 

const app = express(); //initalizer

app.use("/",(req,res)=>{
    res.send('namaste from the dashboard!')
})

app.use("/hello",(req,res)=>{
    res.send('Hello Hello Hello')
})

app.use("/test",(req,res)=>{ //request handlers
    res.send('Hello from the Server!')
})

app.listen(3000) //listener
