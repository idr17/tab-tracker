const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
  .use(morgan('combined'))
  .use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}!, Your user was registered! Have fun!`
  })
})

const PORT = 8081
console.log(`app listen at localhost:${PORT}`)

app.listen(process.env.PORT || PORT)
