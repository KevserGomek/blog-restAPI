const router = require('express').Router();
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:123456@localhost:5432/blogdb')

router.get('/', async (req,res) => {

    const allArticles = await db.query('SELECT $1:name FROM $2:name ORDER BY $3:value', ['*', 'articles', 'dataid'])
    res.status(200).json(allArticles);

})


router.get('/:dataid', async (req, res) => {

    const articleId = parseInt(req.params.dataid);
    const articles = await db.query('SELECT $1:name FROM $2:name' , ['*', 'articles'])
    const article = articles.find(article => article.dataid === articleId);

    if(article) {
        res.status(200).json(article);
    }else {
        res.status(404).send('The requested URL was not found.')
    }
       
})

router.delete('/:dataid', async (req, res) => {
    try{
        const articleId = req.params.dataid;
        const deletedArticle = await db.query('DELETE FROM articles WHERE dataid=$1', [articleId]);
        res.status(204).end();
    } catch(e){
        res.status(500).send("Error")
    }
   
})

router.post('/', async (req, res) => {

    let {id, title, description, image, user_id} = req.body;
    const addedArticle = await db.query('INSERT INTO articles (id, title, description, image, user_id) VALUES ($1, $2, $3, $4, $5)', [id, title, description, image, user_id] )
    res.status(201).json(addedArticle);

})
router.put('/:dataid', async (req, res) => {

    const articleId = req.params.dataid;
    let {title, description, image} = req.body;
    const updatedArticle = await db.query('UPDATE articles SET title=$1, description=$2, image=$3 WHERE dataid=$4', [title, description,image, articleId]);
    res.json(updatedArticle);

})



module.exports=router;