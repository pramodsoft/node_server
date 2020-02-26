//init code
const mongoose=require('mongoose');

// user schema
const userSchema= mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isActive:{
        type:String,
        default:true,
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }

});



// user model
mongoose.model('users',userSchema);

//module exports

module.exports=mongoose.model('users');