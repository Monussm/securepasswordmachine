const express=require('express');
const port=process.env.port ||3000
const app=express();
const hbs=require('hbs');
const path=require('path');
const mypath=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(mypath));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
app.get("/",(req,res)=>{

res.render("index")



})
app.listen(port,()=>{


console.log("Running on port 3000")



})

