import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  let newStudentList = studentList.filter(
    (student) => student.location === city
  );
  const gradesMap = new Map();
  for (const grade of newGrades) {
    gradesMap.set(grade.studentId, grade.grade);
  }
  console.log(newStudentList);
  const finalList = newStudentList.map((student) =>
  );
  return finalList;
}

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
  ])
);
