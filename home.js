const { ENGINE_METHOD_ALL } = require("constants");
const express =require("express");
const app =express();
const port = process.env.Port;

app.set('view engine','pug');

app.get("/",(req,res)=>{
res.status(200).render('../home.pug')
})

app.listen(port,'0.0.0.0', ()=>{
    console.log(`running at ${port}`);
})