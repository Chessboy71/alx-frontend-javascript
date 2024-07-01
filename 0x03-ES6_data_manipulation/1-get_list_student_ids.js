export default function getListStudentIds(studentArray) {
  let studentIds = [];
  if (Array.isArray(studentArray)) {
    studentIds = studentArray.map((Element) => Element.id);
  }
  return studentIds;
}
