const express = require('express')
const postRouter = require('./post/router')

const app = express()

app.get(
  '/data',
  (request, response) => {
    response.send('some data')
  }
)
const parser = express.json()
app.use(parser)

app.use(postRouter)


const port = 4000

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)