var MicrosoftGraph = require('./base.js').Client;

var email = {
    subject: "Hello Tiger Hacks!",
    toRecipients: [{
        emailAddress: {
            address: "dansil@microsoft.com"
        }
    }],
    body: {
        content: "<h1>Microsoft Graph Demo at Tiger Hacks</h1>Check out https://developer.microsoft.com/graph to learn more!",
        contentType: "html"
    }
}

// Send an email with my @edu email address
MicrosoftGraph
    .api('me/sendMail')
    .post({message: email}, (error, res) => {
       if (error) {
           console.log(error)
       }
    });