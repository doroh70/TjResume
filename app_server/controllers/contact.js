const Contact = require('../models/contact');
const Repos = require('../githubAPI');

/* Getting Contact Page */

module.exports.contact = function(req, res) {
    res.render('contact', {title: 'Contact'});
};

module.exports.post = (req, res) => {
    Contact.create(req.body, (err, newContact) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/');
        }
    })
}