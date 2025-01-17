// build your `/api/projects` router here
const express = require('express')
const helpers = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
  helpers.getProject()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  helpers.postProject(req.body)
    .then(project => {
      res.status(201).json(project);
  })
  .catch(next);
})


module.exports = router