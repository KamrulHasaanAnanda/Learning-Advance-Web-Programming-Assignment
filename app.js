//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const {body, validationResult} 		= require('express-validator');
const login				= require('./controllers/login');
const admin				= require('./controllers/admin');
const customer				= require('./controllers/customer');
const registration				= require('./controllers/registration');
const logout			= require('./controllers/logout');
const app				= express();
const port				= 3000;
//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'));
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/admin', admin);
app.use('/customer', customer);
app.use('/registration', registration);
app.use('/logout', logout);


// app.get('/', (req, res)=>{
// 	res.send('welcome');
// });
app.get('/',(req,res)=>{
	res.render('login');
})

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});