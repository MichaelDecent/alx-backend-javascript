const express = require("express")
const countStudents = require('./3-read_file_async');

const app = express();

const hostname = "127.0.0.1";
const port = 1245;

app.get('/', (_, response) => {
    response.send("Hello Holberton School!");
}); 

app.get("/students", (_, response) => {
    res.write("This is the list of our students\n")
    countStudents(process.argv[2].toString())
        .then(output => {
            response.send(['This is the list of our students', output].join('\n'));
        })
        .catch(error => {
            response.statusCode = 500;
            response.send(error.message)
        });
});

app.listen(port, hostname)

module.exports = app