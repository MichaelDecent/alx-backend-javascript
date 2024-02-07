const fs = require('fs');

function countStudents(filePath) {
  try {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    const csArray = [];
    const sweArray = [];

    let count = -1; let csCount = 0; let
      sweCount = 0;

    lines.forEach((line) => {
      if (line.length !== 0) {
        const cols = line.split(',');
        const field = cols[cols.length - 1].trim();

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

    const csStudents = csArray.join(', ');
    const sweStudents = sweArray.join(', ');

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
