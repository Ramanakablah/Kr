const { ENGINE_METHOD_ALL } = require("constants");
const express =require("express");
const app =express();
const port = 8000;

app.set('view engine','pug');

app.get("/",(req,res)=>
{
res.status(200).render('../home.pug')
})

app.listen(port,()=>
{
    console.log(`Running on ${port}`)
})