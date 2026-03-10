const express = require('express') 

const app = express(); //initalizer

app.use("/hello/2",(req,res)=>{ //write nested one first
    res.send("Hello from 2")
})

app.use("/hello",(req,res)=>{ 
    res.send('Hello Hello Hello')
})

// app.use('/user',(req,res)=>{
//     res.send("HAHAHAHAHAHA")
// })
//Only get call
app.get("/user",(req,res)=>{
    res.send({firstName:'Akshay',lastName:'Saini'})
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully to the database")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully")  
})

//this will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{ //request handlers
    res.send('Hello from the Server!')
})

app.use("/",(req,res)=>{
    res.send('namaste from the dashboard!')
})

app.listen(3000) //listener
