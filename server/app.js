var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var portDecision = process.env.PORT || 3000;

// initial jokes provided by the client
jokes = [
  {
    whoseJoke: 'Huck',
    jokeQuestion: 'What\'s the difference between roast beef and pea soup?',
    punchLine: 'Anyone can roast beef.',
  },
  {
    whoseJoke: 'Millie',
    jokeQuestion: 'What do you call a pile of cats?',
    punchLine: 'A meowtain!',
  },
  {
    whoseJoke: 'Dev',
    jokeQuestion: 'Why should you not play cards in the forest?',
    punchLine: 'Too many Cheetahs',
  },
];

app.listen(portDecision, function () {
  console.log('listening on port 3000');
});

// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/jokes', urlencodedParser, function (req, res) {
  console.log('jokes url hit ', req.body);
  jokes.push(req.body);
  res.send(jokes);
});

app.use(express.static('public'));
