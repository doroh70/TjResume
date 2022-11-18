var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;



//requests go through all of the middleware before reaching the MVC parts of the code.
//so express would already know the location of the views, as it's set up in the middleware of app.js
