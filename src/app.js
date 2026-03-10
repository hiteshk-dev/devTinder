const express = require('express') 

const app = express(); //initalizer

// http://localhost:3000/user
app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send({firstName:'Akshay',lastName:'Saini'})
})

// http://localhost:3000/user/101
app.get("/user/:userId/:name",(req,res)=>{
    console.log(req.params)
})



app.listen(3000) //listener
