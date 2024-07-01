export default function getStudentIdsSum(studentList) {
  const studentIdList = studentList.map((student) => student.id);
  const idsSum = studentIdList.reduce((newID, currentSum) => newID + currentSum, 0);
  return idsSum;
}
