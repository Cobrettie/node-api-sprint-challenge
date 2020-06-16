const express = require('express');
const Actions = require('../data/helpers/actionModel');
const Projects = require('../data/helpers/projectModel');

const router = express.Router();

// Endpoints

// add a new action to a project
// must have a provided project_id, 
// if project_id is invalid, db will return an error
router.post('/:id')

// get all actions for a specified project
router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      console.log('Error: ', err)
      res.status(500).json({
        errorMessage: "Could not retrieve project actions"
      })
    })
})

module.exports = router;

