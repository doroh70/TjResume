/*Get Index Page*/

module.exports.resume = function(req, res){
    res.render('resume', {title: 'Resume'});
};