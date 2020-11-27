
const express 	                    = require('express');
const router 	                    = express.Router();
//const {body, validationResult} 		= require('express-validator');
const customerModel                 = require.main.require('./models/customerModel');
//const customerCart                 = require.main.require('./models/customerCart');

router.get('*',  (req, res, next)=>{
	if(req.session.email == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
    customerModel.getAllProducts((results)=>{
        req.session.products=results;
        res.render('customer/home',{products: results, uname: req.session.uname});
    });
});

router.get('/laptops', (req, res)=>{
    customerModel.getAllLaptops((results)=>{
        req.session.products=results;
        res.render('customer/Laptop',{products: results});
    });
});

router.get('/graphics', (req, res)=>{
    customerModel.getAllGraphics((results)=>{
        req.session.products=results;
        res.render('customer/graphics',{products: results});
    });
});
module.exports=router;