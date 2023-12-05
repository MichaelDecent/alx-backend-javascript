export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const sumId = students.reduce((sum, student) => sum + student.id, 0);
    return sumId;
  }
  return 0;
}
