import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

export default class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
      .then((data) => {
        const responsePart = ['This is the list of our students'];
        Object.entries(data).forEach(([field, studentList]) => {
          responsePart.push(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        });
        return response.status(200).send(responsePart.join('\n'));
      })

      .catch(() => {
        response
          .status(500)
          .send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    if (VALID_MAJORS.includes(major)) {
      readDatabase(dataPath)
        .then((data) => {
          Object.entries(data).forEach(([field, studentList]) => {
            if (major === field) {
              response
                .status(200)
                .send(`List: ${studentList.join(', ')}`);
            }
          });
        })

        .catch(() => {
          response
            .status(500)
            .send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
