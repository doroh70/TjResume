const Repos = require('../githubAPI');

/*Get Projects List Page*/

module.exports.projects = function(req, res){
    //call githubapi here, it will return json object.
    
    res.render('projects', {title: 'Projects', repos: Repos});
};

/*Get Projects Details Page*/

module.exports.details = function(req, res){
    res.render('projects', {title: 'Project Details'});
};

/*Get New Project Page*/

module.exports.new = function(req, res){
    res.render('projects', {title: 'New Project'});
};
