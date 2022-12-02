const https = require('https');

var options = {
    url: "https://api.github.com/users/doroh70/repos",
    headers: {
        'User-Agent': 'MEAN Resume'
    }
};

let data = '';
ex = "hehehe";

var repo = https.request('https://api.github.com/users/doroh70/repos', options, (resp) => {

    resp.setEncoding('utf8');
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        //console.log(ex);
        data = JSON.parse(data);
        //console.log(data);
        module.exports.repo = data;
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
}).end();


//console.log(Object.keys(repo));
