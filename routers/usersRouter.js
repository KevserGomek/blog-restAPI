const router = require('express').Router();
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:123456@localhost:5432/blogdb')

router.get('/', async (req,res) => {

    const users = await db.query('SELECT $1:name FROM $2:name ORDER BY $3:value', ['*', 'users', 'dataid'])
    res.status(200).json(users);

})

router.post('/', async (req, res) => {

    let {id, firstname, surname, email, password} = req.body;
    const newUser = await db.query('INSERT INTO users (id, firstname, surname, email, password) VALUES ($1, $2, $3, $4, $5)', [id, firstname, surname, email, password] )
    res.status(201).json(newUser);

})

module.exports=router;