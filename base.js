const MicrosoftGraph = require("@microsoft/microsoft-graph-client");
const secrets = require("./secrets")

exports.Client = MicrosoftGraph.Client.init({
    authProvider: (done) => {
        done(null, secrets.AccessToken);
    }
});