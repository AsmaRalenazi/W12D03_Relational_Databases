const usersModel = require('./../../db/models/users');
const bcrypt=require("bcrypt")

const createNewAuthor =async (req, res) => {
	const { firstName, lastName, age, country, email, password, role } = req.body;
	const password1 =hasPassword
const hasPassword= await bcrypt.hash(password1.toString(),10)

const query=`INSERT INTO users (firstName,lastName,age,country,email,password,role,)VALUES(?,?,?,?,?,?,?) ;`
	const data =[
		firstName,
		lastName,
		age,
		country,
		email,
		password,
		role,
	];

	db.query=(query,data,(err,result)=>{
		if (err) throw err;
		console.log("RESULT :",result);
		res.json(result.data)
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	createNewAuthor,
};
