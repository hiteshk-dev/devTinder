const express = require("express");

const app = express(); //initalizer

//Multiple routers
// app.use("/route", [rH1, rH2, rH3], rH4, rH5)
app.get(
  "/user",
  (req, res, next) => {
    //Empty Request Handler means infinite loop of requests
    console.log("Handling the API request ");
    res.send("Response");
    next();
  },
  (req, res) => {
    console.log("Handling the 2nd router");
    res.send("2nd response"); //Cannot set headers after they are sent to the client
  }
);

//Moved to next
app.use("/dummyuser", [
  (req, res, next) => {
    console.log("Handle");
    next();
    res.send("response");
  },
  (req, res) => {
    console.log("2nd response");
    res.send("2nd response");
  },
]);

//Corner case
app.use("/dummyuser2", (req, res, next) => {
  next();
});

app.listen(3000); //listener
