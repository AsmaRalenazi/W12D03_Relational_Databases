const articlesModel = require('./../../db/models/articles');

const getAllArticles = (req, res) => {
	const query=`SELECT * FROM articles`
	db.query=(query,(err,result)=>{
		if (err) throw err;
		console.log("RESULT :",result);
		res.json(result)
		})
}

const getArticlesByAuthor = (req, res) => {
	const author = req.query.author;
	const query=`SELECT author FROM articles WHERE author=${author};`
	db.query=(query,(err,result)=>{
		if (err) throw err;
		console.log("RESULT :",result);
		res.json(result)
		})
};

const getAnArticleById = (req, res) => {
	const _id = req.params.id;
const query = `SELECT * FROM articles WHERE id=${_id};`
db.query=(query,(err,result)=>{
	if (err) throw err;
	console.log("RESULT :",result);
	res.json(result)
	})
	
};

const createNewArticle = (req, res) => {
	const {title,description,author}=req.body
	const query =`INSERT INTO articles (title,description,author) VALUE (?,?,?);`
	const arr=[title,description,author]
	db.query=(query,arr,(err,result)=>{
		if (err) throw err;
		console.log("RESULT :",result);
		res.json(result)
		})
};

const updateAnArticleById = (req, res) => {
	const id = req.params.id;

	articlesModel
		.findByIdAndUpdate(id, req.body, { new: true })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const deleteArticleById = (req, res) => {
	const id = req.params.id;

	articlesModel
		.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json({
				success: true,
				message: `Success Delete atricle with id => ${id}`,
			});
		})
		.catch((err) => {
			res.send(err);
		});
};

const deleteArticlesByAuthor = (req, res) => {
	const author = req.body.author;

	articlesModel
		.deleteMany({ author })
		.then((result) => {
			res.status(200).json({
				success: true,
				message: `Success Delete atricle with id => ${author}`,
			});
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	getAllArticles,
	getArticlesByAuthor,
	getAnArticleById,
	createNewArticle,
	updateAnArticleById,
	deleteArticleById,
	deleteArticlesByAuthor,
};
