const express = require('express');
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// Endpoints

// add a new project
router.post('/', validateProject(), (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log('Error: ', err)
      res.status(500).json({
        errorMessage: "Could not create project"
      })
    })
})

// get all projects
router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log('Errror: ', err);
      res.status(500).json({
        errorMessage: "Could not retrieve projects"
      })
    })
})

// get project by id
router.get('/:id', validateId(), (req, res) => {
  res.status(200).json(req.project)
})

// get all project actions
router.get('/:id/actions', validateId(), (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      console.log('Error: ', err);
      res.status(500).json({
        errorMessage: "Could not retrieve project actions"
      })
    })
})

// update project by id
router.put('/:id', validateId(), (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log('Error: ', err);
      res.status(500).json({
        errorMessage: "Could not update project, please ensure all fields are filled out"
      })
    })
})

// remove project
router.delete('/:id', validateId(), (req, res) => {
  Projects.remove(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log('Error: ', err);
      res.status(500).json({
        errorMessage: "Could not remove project"
      })
    })
})

// custom middleware 

function validateId() {
  return (req, res, next) => {
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
}

function validateProject() {
  return (req, res, next) => {
    if (!req.body.name || !req.body.description) {
      res.status(400).json({
        errorMessage: "Please provide both name and description"
      })
    } else {
      next();
    }
  }
}

module.exports = router;

// ask about 
// .returning() is not supported by sqlite3 and will not have any effect.