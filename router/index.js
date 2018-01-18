var server = require("./server");
var router = require("./router");

server.start(router.route);


//浏览器输入http://localhost:8888/path?num=232