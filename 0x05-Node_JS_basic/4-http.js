const http = require("http")

const hostname = "127.0.0.1";
const port = 1245;

const app = http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Holberton School!")
})

app.listen(port, hostname)

module.exports = app