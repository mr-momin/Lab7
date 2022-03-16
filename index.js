const port = 8989,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
        console.log("Received an incoming request!");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });

        var dt = new Date();
        response.write("The Date and Time is:" + dt);
        response.end();
        console.log(`Sent a response : ${dt}`);
    });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
