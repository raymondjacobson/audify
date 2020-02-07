const express = require('express')
const request = require('request')
const bodyParser = require('body-parser');

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/audify', async (req, res) => {
  const { text } = req.body
  // const dp = await request()
  // console.log(dp)
  console.log(text)
  const request = require('request')
  request(`https://discoveryprovider.audius.co/search/autocomplete?query=${text}&limit=1`,
    (error, response, body) => {
      body = JSON.parse(body)
      if (error || !body || !body.data || !body.data.tracks || !body.data.tracks[0]) {
        // console.log(body)
        res.send('bad request')
        return
      }

      const { track_id, route_id } = body.data.tracks[0]

      res.send(`https://audius.co/${route_id}-${track_id}`)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))