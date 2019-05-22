const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Card} = require('./models/card');

router.get('/cards', (req, res) => {
  Card.find().then((rec) => {
    if (!rec) res.status(400).send('Error during getting cards');
    res.send(rec);
  })
});

router.post('/card', (req, res) => {
  let card = new Card({
    question: req.body.question,
    answer: req.body.answer,
    creationDate: new Date()
  });

  card.save(card).then((rec) => {
    if (!rec) res.status(400).send('Error during creating a card');
    res.send(rec);
  })
});

router.patch('/card/:id', (req, res) => {
  let id = req.params.id;

  Card.findByIdAndUpdate(
    {_id: id},
    {$set: {
      question: req.body.question,
      answer: req.body.answer,
    }},
    {new: true}

    ).then((rec) => {
    if (!rec) res.status(400).send('Record not found');
    res.send(rec);
  })
});

router.delete('/card/:id', (req, res) => {
  let id = req.params.id;
  Card.findByIdAndRemove(id).then((rec) => {
    if (!rec) res.status(400).send('Record not found');
    res.send(rec);
  })
});

module.exports = router;
