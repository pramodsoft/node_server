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
        require:true,
        unique:true
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
    },
    password_normal:{
        type:String,
        require:true
    }

});



// user model
mongoose.model('users',userSchema);

//module exports

module.exports=mongoose.model('users');