require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).send("you are on the home page")
})

app.listen(process.env.PORT||9000, ()=>{
    console.log("the server is running on port 9000")
})