const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/audify', (req, res) => {
  res.send('https://audius.co/lido')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))