const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
  .use(morgan('combined'))
  .use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello Worlds'
  })
})

app.listen(process.env.PORT || 8081)
