export default function (setArray, array) {
  for (const val of array) {
    if (!setArray.has(val)) {
      return false;
    }
  }
  return true;
}
