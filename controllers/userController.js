//init code

const router=require('express').Router();
const bodyParser=require('body-parser');
const bcrypt=require('bcryptjs');
const { check,validationResult }=require('express-validator');
const User=require('./../models/user');




//middleware setup

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

// router goes here


router.all('/',
function (req,res){
    return res.json({
        status:true,
        message:'user controller working....'
    });


});









//model export

module.exports=router;
