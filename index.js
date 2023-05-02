const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('chefs are working in the kitchen')
})

app.listen(port, () => {
  console.log(`chefs are working on port ${port}`)
})