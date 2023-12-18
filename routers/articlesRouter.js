const router = require('express').Router();

let articles = require('../articles.js')

router.get('/', (req,res) => {
    res.status(200).json(articles); //status(200)
})

router.get('/:dataId', (req, res) => {

    // const { id } = req.params;
    const articleId = req.params.dataId;
    const article = articles.find(article => article.dataId === parseInt(articleId));

    if(article) {
        res.status(200).json(article);
    }else
        res.status(404).send('The requested URL was not found.')
    

})

router.delete('/:dataId', (req, res) => {

    const articleId = req.params.dataId;
    const article = articles.find(article => article.dataId === Number(articleId));

    if(article) {
        articles = articles.filter(article => article.dataId !== Number(articleId));
        res.status(204).end();
    }else
        res.status(404).send('The requested URL was not found.')
})

let newArticleId= 7;

router.post('/', (req, res) => {
    let newArticle = req.body;
    console.log(newArticle)
    newArticle.dataId=newArticleId;
    newArticleId++;
    articles.push(newArticle);
    res.status(201).json(newArticle);
    
})


router.put('/:dataId', (req, res) => {

    const articleId = req.params.dataId;
    const articleIndex = articles.findIndex(article => article.dataId === Number(articleId));
    
    const updatedArticle = req.body;
    updatedArticle.dataId=articleId;
    // updatedArticle.id=req.params.id;

    
    console.log(updatedArticle)

    if(articleIndex) {
        articles[articleIndex] = { ...articles[articleIndex], ...updatedArticle };
        res.status(200).json({article : articles[articleIndex]});
    }else {
        res.status(404).send('The requested URL was not found.')
    }
        
    
})



module.exports=router;