const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');
const {body, validationResult} 		= require('express-validator');

router.get('/', (req, res)=>{
	res.render('registration');	
});


router.post('/', [
    //
    body('username')
    .notEmpty()
    .withMessage('username is required'),
    
    //
    body('phone')
    .notEmpty()
    .withMessage('uphone is required'),
    
    // Email nameField & empty,email validation
    body('email')
    .isEmail()
    .withMessage('uemail is required'),

	body('password')
    .notEmpty()
    .withMessage('upassword is required'),

    body('user_role')
    .notEmpty()
    .withMessage('user role is required')

  ], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
    }else{
        user={
            uname: req.body.username,
            uphone: req.body.phone,
            umail: req.body.email,
			      uaddress: req.body.address,
			      upass: req.body.password,
			user_role: req.body.user_role
        };

        userModel.insert(user,(status)=>{
            if(status){
				console.log('succesful');
				res.redirect('/login');                              
            }else{
                res.send("Registration Failed!");                
            } 
        });
    }
  });
  module.exports = router;