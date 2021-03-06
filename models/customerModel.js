const db    = require('./db');

module.exports={
    validateMail: (umail, callback)=>{
		var sql = "select * from users where umail= '"+umail+"'";
        db.getResults(sql, (results)=>{
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
        });
	},
	insertIntoContact:(contact, callback)=>{
		sql="INSERT INTO `contact`(`sendermail`, `receivermail`, `conmessage`) VALUES ('"+contact.sendermail+"', '"+contact.receivermail+"', '"+contact.conmessage+"')";
		db.execute(sql, (status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validateUpdateMail: (umail, callback)=>{
		var sql = "select * from users where umail= '"+umail+"'";
        db.getResults(sql, (results)=>{
			if(results.length >1 ){
				callback(true);
			}else{
				callback(false);
			}
        });
	},
	updateProfile: (user,callback)=>{
		var sql = "UPDATE `users` SET `uname`='"+user.uname+"',`uphone`='"+user.uphone+"',`umail`='"+user.umail+"',`uaddress`='"+user.uaddress+"',`upass`='"+user.upass+"' WHERE uid='"+user.uid+"'";
		db.execute(sql, (status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAllProducts: (callback)=>{
		var sql="select * from shop, items where shop.iid=items.iid";
        db.getResults(sql, (results)=>{
			callback(results);
        });
	},

	getAllLaptops: (callback)=>{
		var sql="select * from laptops";
        db.getResults(sql, (results)=>{
			callback(results);
        });
	},

	getAllGraphics: (callback)=>{
		var sql="select * from graphics";
        db.getResults(sql, (results)=>{
			callback(results);
        });
	},

	searchProduct: function(searchKey, callback){
		var sql="select * from shop, items where shop.iid=items.iid and iname like '%"+searchKey+"%'";
		db.getResults(sql, (results)=>{
			callback(results);
		});

	},
	getById: function(iid, callback){
		var sql = "select * from items where iid= '"+iid+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	addInvoice:(order,callback)=>{
		var sql = "INSERT INTO `invoice`(`uid`, `orderdate`, `subtotal`, `shipmethod`) VALUES ('"+order.uid+"', NOW(), '"+order.subtotal+"', '"+order.shipmethod+"')";
		db.execute(sql, (status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAllEmail: function(umail, callback){
		var sql="select * from contact where receivermail='"+umail+"'";
		db.getResults(sql, (results)=>{
			callback(results);
		});

	},
	getAllNotice: function(callback){
		var sql="select * from notice";
		db.getResults(sql, (results)=>{
			callback(results);
		});

	},
	getAllInvoice: function(uid, callback){
		var sql="select * from invoice where uid='"+uid+"'";
		db.getResults(sql, (results)=>{
			callback(results);
		});

	},


}