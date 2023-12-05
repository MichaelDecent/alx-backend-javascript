export default function getListStudentIds(myArray) {
  if (Array.isArray(myArray)) {
    const idList = myArray.map((array) => array.id);
    return idList;
  }
  return [];
}
