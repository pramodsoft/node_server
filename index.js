var express=require("express");

var app=express();

//_dirname is must for adding absolute path

app.use(express.static('public'));
//now any file in public folder may be used, just avoid public to add in url
//expree.statis is mainly used to get css and other js file, the example shown in html file
app.use(express.static('public/dist'));


app.get("/",(req,res)=>{
res.send("love u manisha");
});

//__dirname must to get the index file
app.get("/king",(req,res)=>{
res.sendFile(__dirname+"/public/test.html");
});

app.get("/vue",(req,res)=>{
res.sendFile(__dirname+"/public/dist/index.html");
});

app.listen(3000,()=>{
console.log("server running successfully");
});