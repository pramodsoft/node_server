var express=require("express");

var app=express();


app.get("/",(req,res)=>{
res.send("love u manisha");
});

app.get("/king",(req,res)=>{
res.sendFile(__dirname+"/public/test.html");
});

app.listen(3000,()=>{
console.log("server running successfully");
});