const fs = require('fs');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n');
            const csArray = [];
            const sweArray = [];

            let count = -1, csCount = 0, sweCount = 0;

            lines.forEach((line, index) => {
                if (line.length !== 0) {
                    cols = line.split(',');
                    field = cols[cols.length - 1].trim();

                    if (field === 'CS') {
                        csArray.push(cols[0]);
                        csCount++
                    } else if (field === 'SWE') {
                        sweArray.push(cols[0]);
                        sweCount++
                    }

                    count++;
                }
            });

            const csStudents = csArray.join(", ")
            const sweStudents = sweArray.join(", ")

            console.log(`Number of students: ${count}`);
            console.log(`Number of students in CS: ${csCount}. List: ${csStudents}`)
            console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents}`)
            output = `Number of students: ${count}\n` + `Number of students in CS: ${csCount}. List: ${csStudents}\n` + `Number of students in SWE: ${sweCount}. List: ${sweStudents}`
            resolve(output)
        });
    })
}

module.exports = countStudents;