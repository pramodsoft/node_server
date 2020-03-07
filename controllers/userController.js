//init code

const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('./../models/user');




//middleware setup

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// router goes here


router.all('/',
    function (req, res) {
        return res.json({
            status: true,
            message: 'user controller working....'
        });


    });


router.post('/createNew',
    [
        //check not emply field
        check('username').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail()

    ],

    function (req, res) {
        //check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: false,
                message: 'form validation fails...',
                errors: errors.array()

            });
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        //output data to user

        /*
        //used just to test data reached to server and get reponse
            return res.json({
                status:true,
                message:'user data ok',
                data:req.body,
                hashedPassword:hashedPassword
            });
        */


        //create method is used for inserting data to database
        // i will use this method only to save data to database
        //as this method use standard way to save data in database
        User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
                password_normal: req.body.password

            },
            function (error, result) {
                //check error
                if (error) {
                    // return res.status(500).send("DB Insert fail...")
                    return res.json({
                        status: false,
                        message: 'DB Insert fail...',
                        error: error
                    })

                }
                //if everything ok
                return res.json({
                    status: true,
                    message: 'DB Insert successfully',
                    result: result
                });

            }

        );





        //save method is used to insert data to database
        /*
        
        var user=new User({
            username:req.body.username,
                email:req.body.email,
                password:hashedPassword,
                password_normal:req.body.password
        
        });
        
        user.save(
            function(error,result){
                //check error
                if(error){
                   // return res.status(500).send("DB Insert fail...")
                   return res.json({
                       status:false,
                       message:'DB Insert fail...',
                       error:error
                   })
        
                }
                //if everything ok
                return res.json({
                    status:true,
                    message:'DB Insert successfully',
                    result:result
                });
        
            }
        
        )
        
        */

    });



router.get(
    '/findall',
    function (req, res) {
        User.find(
            function (error, result) {
                if (error) {
                    return res.json({
                        status: true,
                        message: 'fail to find data..',
                        error: error
                    })
                }
                return res.json({
                    status: true,
                    message: 'find all data successfully..',
                    result: result
                })
            }
        )



    }
)

router.get(
    '/find_by_username/:username',
    function (req, res) {
        User.find(
            { username: req.params.username },
            function (error, result) {
                if (error) {
                    return res.json({
                        status: false,
                        message: 'db by username fails to find...',
                        error: error
                    })
                }
                return res.json({
                    status: true,
                    message: 'db by username find successsfullyl',
                    result: result
                })
            }

        )
    }
)


router.get(
    '/findbyid/:id',
    function (req, res) {
        //find user document

        User.findById(
            // user of projection and condition find method
            req.params.id,
            { password: 0 },
            function (error, result) {
                if (error) {
                    return res.json({
                        status: false,
                        message: 'find not working...',
                        error: error
                    })
                }

                return res.json({
                    status: true,
                    message: 'find successful',
                    result: result
                })



            }

        )





    });



router.put(
    "/update/:username",
    function (req, res) {
        User.update(
            { username: req.params.username },
            { email: 'test@gmail.com' },
            function (error, result) {
                if (error) {
                    return res.json({
                        status: false,
                        message: 'update method fails..',
                        error: error
                    })
                }
                return res.json({
                    status: true,
                    message: 'update successful..',
                    result: result
                })
            }


        )
    }
);


router.delete(
    '/remove/:username',
    function (req, res) {
        User.remove(
            { username: req.params.username },
            function (error, result) {
                if (error) {
                    return res.json({
                        status: false,
                        message: 'remove action not functioning...',
                        error: Error
                    })
                }
                return res.json({
                    status: true,
                    message: 'remove successfully...',
                    result: result
                })
            }
        )
    }
)


router.put(
    '/login',
    function (req, res) {
        User.find(
            {
                username: req.body.username,
            },
            function (error,result) {
                if (error) {
                    return res.json({
                        status: false,
                        message: "login fail due to error",
                        error: error
                    })
                }
                if(result){
                   // res.send("result found"+result);
                  
                const isMatch=bcrypt.compareSync(req.body.password,result[0].password);
                if(isMatch){
                res.json({
                    isMatch:isMatch,
                    message:"matched perfectly",
                    server_password:result[0].password,
                    result:result,
                    send_password:req.body.password
                })
                
            }else{
                res.json({
                    isMatch:isMatch,
                    message:"not matched",
                    server_password:result[0].password,
                    result:result,
                    send_password:req.body.password
                })

            }

            }
        }




        )
    }
)









//model export

module.exports = router;
