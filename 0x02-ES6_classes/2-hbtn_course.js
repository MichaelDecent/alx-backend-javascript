export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
    return this._name;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
    return this._length;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((element) => typeof element === 'string')) {
      throw new TypeError('Students must an arry of strings');
    }
    this._students = newStudents;
    return this._students;
  }
}
