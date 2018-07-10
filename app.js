const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.use(bodyParser.json())
app.use('/', routes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started')
})

