var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/index');
var ctrlResume = require('../controllers/resume');
var ctrlProjects = require('../controllers/projects');
var ctrlContact = require('../controllers/contact');
var ctrlInterests = require('../controllers/interests');

/* GET home page. */
router.get('/', ctrlHome.index);

/* GET resume page. */
router.get('/resume', ctrlResume.resume);

/* GET projects page. */
router.get('/projects', ctrlProjects.projects);

/* GET projects details page. */
router.get('/projects/details', ctrlProjects.details);

/* GET new project page. */
router.get('/projects/details/new', ctrlProjects.new);

/* GET contact page. */
router.get('/contact', ctrlContact.contact);

/* GEt interests page. */
router.get('/interests', ctrlInterests.interests);



module.exports = router;



//requests go through all of the middleware before reaching the MVC parts of the code.
//so express would already know the location of the views, as it's set up in the middleware of app.js
