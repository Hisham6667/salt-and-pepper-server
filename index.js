const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('chefs are working in the kitchen')
})

app.listen(port, () => {
  console.log(`chefs are working on port ${port}`)
})