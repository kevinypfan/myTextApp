const _ = require('lodash');
const fallback = require('express-history-api-fallback');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {User} = require('./models/user');

const app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UserTest');

app.use(bodyParser.json());

const root = __dirname;
app.use(express.static(root));


// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.get('/note', (req, res) => {
  console.log("sended")
  res.send({
    "name":'hello'
  });
})
app.use(fallback('index.html', { root: root }));

app.listen(8000, function () {
    console.log('listening on port 8000');
});
