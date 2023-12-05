export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (Array.isArray(studentsList)) {
    const students = studentsList.filter((student) => student.location === city);

    const updatedStudents = students.map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (foundGrade) {
        return { ...student, grade: foundGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });

    return updatedStudents;
  }
  return [];
}
