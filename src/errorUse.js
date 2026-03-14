const express = require('express')
const app = express()


app.get('/error',(req,res)=>{
    // try{
        throw new Error('error')
    // }
    // catch(err){
        res.status(400).send('Error')
    // }
})
//always at end
app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('Some Error')
    }
})

app.listen(7778)