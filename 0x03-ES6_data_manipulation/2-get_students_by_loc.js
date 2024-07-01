export default function getStudentsByLocation(studentList, city) {
  let filteredList = [];
  if (Array.isArray(studentList)) {
    filteredList = studentList.filter((student) => student.location === city);
  }
  return filteredList;
}
