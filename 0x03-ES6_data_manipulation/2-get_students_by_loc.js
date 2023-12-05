export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const studentsInfo = students.filter((student) => student.location === city);
    return studentsInfo;
  }
  return [];
}
