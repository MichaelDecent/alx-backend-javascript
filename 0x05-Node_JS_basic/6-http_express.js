const express = require("express")

const app = express()

const port = 1245
const hostname = "127.0.0.1";

app.get('/', (_, response) => {
    response.send("Hello Holberton School!");
});

app.listen(port, hostname)

module.exports = app;