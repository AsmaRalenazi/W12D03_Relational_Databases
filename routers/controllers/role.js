const roleModel = require('./../../db/models/role');

const createNewRole = (req, res) => {
	const { role } = req.body;
	const query=`INSERT INTO roles (role) VALUES (?);`
	db.query=(query,role,(err,result)=>{
	if (err) throw err;
	console.log("RESULT :",result);
	res.json(result)
	})
	 
	}
module.exports = {
	createNewRole,
};
