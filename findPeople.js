var MicrosoftGraph = require('./base.js').Client;

// Find people named "Dan Silver" at the University of Missouri
MicrosoftGraph
    .api('users')
    .filter("startsWith(displayName, 'Silver, Daniel ')")
//    .select("displayName, mail")
    .get((error, response) => {
        if (error) {
            console.error(error);
        }
        console.log(response);
    });