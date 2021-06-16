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
	const id =req.params.id;
    const query = `UPDATE article SET id
    WHERE id =? `;
    db.query(query,id, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
};

const deleteArticleById = (req, res) => {
	const id = req.params.id;

    const query = `DELETE FROM article 
    WHERE id =? `;
    db.query(query,id, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
};

const deleteArticlesByAuthor = (req, res) => {
	const author = req.body.author;

    const query = `DELETE FROM article 
    WHERE author =? `;
    db.query(query,author, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
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
