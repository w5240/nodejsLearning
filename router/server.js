var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        // console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(pathname+','+query);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;