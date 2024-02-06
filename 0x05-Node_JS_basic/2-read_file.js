const fs = require('fs');

function countStudents(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            throw Error('Cannot load the database')
        }

        const lines = data.split('\n');
        const csArray = [];
        const sweArray = [];

        let count = -1, csCount = 0, sweCount = 0;

        lines.forEach((line, index) => {
            if (line.length !== 0) { // Added parentheses around condition and fixed syntax
                cols = line.split(',');
                field = cols[cols.length - 1].trim();

                if (field === 'CS') {
                    csArray.push(cols[0]);
                    csCount += 1;
                } else if (field === 'SWE') {
                    sweArray.push(cols[0]);
                    sweCount += 1;
                }

                count += 1;
            }
        });

        const csStudents = csArray.join(", ")
        const sweStudents = sweArray.join(", ")

        console.log(`Number of students: ${count}`);
        console.log(`Number of students in CS: ${csCount}. List: ${csStudents}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents}`);
    });
}

module.exports = countStudents;
