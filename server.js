const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const api = require('./server/api');

app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/LearningStuff', {useNewUrlParser: true});
app.use(express.static(path.join(__dirname, 'dist/learning-stuff')));

app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/learning-stuff/index.html'));
});
app.listen(3000, () => console.log('listening  port 3000'));
