//init code
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');


require('dotenv').config();

const port=process.env.PORT;

const app=express();
const database= require('./database');

//middleware setup
app.use(morgan('dev'));
app.use(cors());

//defaults routes

app.all('/',
function(req,res){
return res.json({
    status:true,
    message:"index page working fine....."
})
});

app.listen(port,function(){
console.log("server running on port "+port)
});





