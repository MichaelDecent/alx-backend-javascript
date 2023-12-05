export default function cleanSet(setArray, checkString) {
  if (checkString) {
    const startString = Array.from(setArray).filter((value) => value.startsWith(checkString));
    const cleanedStrings = startString.map((value) => value.substring(checkString.length));

    return cleanedStrings.join('-');
  }
  return '';
}
