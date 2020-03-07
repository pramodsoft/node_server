
//init code
const mongoose=require('mongoose');
const assert=require('assert');

// require('dotenv').config();

const db_url=process.env.DB_URL;

//connection code
mongoose.connect(db_url,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,


},

function(error,link) {
 // check error
 assert.equal(error,null,"DB CONNECTION finally..")   
 //OK
 console.log('DB CONNECT SUCCESS...');
 //console.log(link);
}



);
