const express = require("express");

const app = express(); //initalizer

//Another way of Multiple routes by defining same name only move if next() is there
// app.use("/route", rH1)
// app.use("/route", rH2)

//GET /users => middleware chain => request handler

app.use("/",(req,res,next)=>{
    // res.send('hello')
    next()
})

app.get("/user", (req, res) => {
  res.send("2nd handler");
});

app.get("/user", (req, res, next) => {
  //Empty Request Handler means infinite loop of requests
  console.log("Handling the API request ");
  next();
});

app.listen(3000); //listener
