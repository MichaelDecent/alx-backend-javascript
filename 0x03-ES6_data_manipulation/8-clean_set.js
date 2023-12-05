export default function cleanSet(setArray, checkString) {
  if (checkString === undefined || checkString.length === 0) {
    return '';
  }
  const startString = Array.from(setArray).filter((value) => value.startsWith(checkString));
  const cleanedStrings = startString.map((value) => value.substring(checkString.length));
  return cleanedStrings.join('-');
}
