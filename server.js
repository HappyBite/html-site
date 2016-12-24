//Lets require/import the HTTP module
var http = require('http');

// set our port
var port = process.env.PORT || 3000;

//Create a server
var server = http.createServer();

//Lets start our server
server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});