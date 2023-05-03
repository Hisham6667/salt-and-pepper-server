const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const allChef = require('./data/allChef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('chefs are working in the kitchen')
})
app.get('/allChef', (req, res) => {
  res.send(allChef)
})
app.get('/allChef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = allChef.find(chef => parseInt(chef.id) === id)
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`chefs are working on port ${port}`)
})