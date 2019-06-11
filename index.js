const express = require('express')
const app = express();

app.set('view engine', 'pug')

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
