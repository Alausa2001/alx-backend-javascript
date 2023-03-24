import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    response.statusCode = 200;
    response.write('This is the list of our students\n');
    try {
      const data = await readDatabase('database.csv');
      const dataReturned = [];
      for (const [key, value] of data) {
        dataReturned.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      response.end(dataReturned.join('\n'));
    } catch (err) {
      response.statusCode = 500;
      response.end(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const url = request.params.major.toUpperCase();
    if (url !== 'CS' && url !== 'SWE') {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase('database.csv');
      for (const [key, value] of data) {
        if (url === key) response.end(`List: ${value.join(', ')}`);
      }
    } catch (err) {
      response.statusCode = 500;
      response.end(err.message);
    }
  }
}

export default StudentsController;
