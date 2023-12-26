const router = require('express').Router();
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:123456@localhost:5432/blogdb')

router.get('/', async (req,res) => {


    const { offset = 0, limit = 3 } = req.query;
    const articlesDb= await db.query('SELECT * FROM (SELECT a.dataid, a.title, a.image, a.description, u.firstname, u.surname FROM articles a JOIN users u ON u.dataid= a.user_id ORDER BY a.dataid) articles OFFSET $1 LIMIT $2', [offset, limit])
    res.json(articlesDb)

})



module.exports=router;