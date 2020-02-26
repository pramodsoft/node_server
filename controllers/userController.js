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


router.post('/createNew',
[
    //check not emply field
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail()

],

function(req,res){
    //check validation errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            status:false,
            message:'form validation fails...',
            errors:errors.array()

        });
    }

    const hashedPassword=bcrypt.hashSync(req.body.password,10);

    //output data to user
    return res.json({
        status:true,
        message:'user data ok',
        data:req.body,
        hashedPassword:hashedPassword
    });

});









//model export

module.exports=router;
