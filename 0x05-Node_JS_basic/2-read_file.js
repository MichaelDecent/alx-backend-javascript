const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const lines = data.split('\n');
    const csArray = [];
    const sweArray = [];

    let count = 0;

    lines.forEach((line, index) => {
      cols = line.split(',');
      field = cols[cols.length - 1].trim(); // Trim to remove extra spaces

      if (field === 'CS') { // Use === for comparison
        csArray.push(cols[cols.length - 1].trim()); // Push the last element, not the length
      } else if (field === 'SWE') { // Use === for comparison
        sweArray.push(cols[cols.length - 1].trim()); // Push the last element, not the length
      }

      count += 1;
    });

    console.log("Number of students: ", count);
    console.log("CS Students: ", csArray);
    console.log("SWE Students: ", sweArray);
  });
}

module.exports = countStudents
