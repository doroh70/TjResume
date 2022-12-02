/*Render sign-in page*/
module.exports.signIn = function(req, res){
    res.render('signin', {title: 'Sign-In'})
}