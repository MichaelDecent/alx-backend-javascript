const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            const lines = data.split("\n");
            const firstNameObject = {};

            const csArray = [];
            const sweArray = [];

            lines.forEach((line, _) => {
                if (line.trim().length !== 0) {
                    const cols = line.split(',');
                    const field = cols[cols.length - 1].trim();

                    if (field === 'CS') {
                        csArray.push(cols[0])
                    } else if (field === 'SWE') {
                        sweArray.push(cols[0]);
                    }
                }
            });

            firstNameObject["CS"] = csArray;
            firstNameObject["SWE"] = sweArray;

            resolve(firstNameObject);
        });
    });
}

module.exports = readDatabase
