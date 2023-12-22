const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const bodyParser = require('body-parser')
const articlesRouters = require('./routers/articlesRouter')
const usersRouters = require('./routers/usersRouter')

app.use(bodyParser.json());
app.use(cors());
app.use('/articles', articlesRouters);
app.use('/users', usersRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  

