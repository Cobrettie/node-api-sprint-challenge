const express = require('express');
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// Custom middleware and validators

function validateId(req, res, next) {
  const numbers = req.url.match(/[0-9]+/)

  if (numbers) {
    Projects.get(numbers[0])
      .then(project => {
        req.project = project
        if (project) {
          next()
        } else {
          res.status(400).json({
            errorMessage: "Project not found"
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          errorMessage: "Error retrieving project"
        })
      })
  } else {
    res.status(400).json({
      errorMessage: "Invalid project id"
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