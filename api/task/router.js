// build your `/api/tasks` router here
const express = require('express')
const helpers = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
  helpers.getTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  helpers.postTask(req.body)
    .then(task => {
      res.status(201).json(task);
  })
  .catch(next);
})


module.exports = router