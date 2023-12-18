const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const bodyParser = require('body-parser')
const articlesRouters = require('./routers/articlesRouter')

app.use(bodyParser.json());
app.use(cors());
app.use('/articles', articlesRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  

