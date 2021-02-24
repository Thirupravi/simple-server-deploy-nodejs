const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/receive', (req, res) => {
  res.send('{"cmd":"browser_open","url":"file:///android_asset/index.html", "xpathinputbox":"/html/body/form/div/input","xpathbutton":"/html/body/form/div/button"}');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})