const Repos = require('../githubAPI');

/*Get Index Page*/

module.exports.index = function(req, res){
    res.render('index', {title: 'Index', repos: Repos});
};