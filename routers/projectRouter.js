const express = require('express');
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// Custom middleware and validators

function validateId(req, res, next) {
  if (req.params.id) {
    Projects.get(req.params.id)
      .then(project => {
        if (project) {
          req.project = project
          next()
        } else {
          res.status(400).json({
            errorMessage: "Invalid project id"
          })
        }
      })
      .catch(err => {
        res.status(400).json({
          errorMessage: "Problem retrieving project"
        })
      })
  } else {
    res.status(400).json({
      errorMessage: "No project id provided"
    })
  }
}






router.get('/', (req, res) => {
  project.get()
  res.send(200).json({
    message: "Welcome, friend"
  })
})

router.get('/:id', (req, res) => {
  console.log('teyfewgjyhf')
  res.status(200).json({ message: 'lulpop'})
})

module.exports = router;