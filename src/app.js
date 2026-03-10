const express = require('express') 

const app = express(); //initalizer

// ab, abc
app.get("/ab?c",(req,res)=>{
    res.send({firstName:'Akshay',lastName:'Saini'})
})

// abc, abbbbbbbc
app.get("/ab+c",(req,res)=>{
    res.send("Hello")
})

// abAKSHAYcd
app.get("/ab*cd",(req,res)=>{
    res.send("Hellp")
})

// ad, abcd
app.get("/a(bc)?d",(req,res)=>{
    res.send("Hello")
})

// works if path contains a
app.get(/a/,(req,res)=>{
    res.send("if a then works")
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully to the database")
})


app.listen(3000) //listener
