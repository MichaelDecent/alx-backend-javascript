export default function iterateThroughObject(reportWithIterator) {
  let nameList = '';
  for (const [index, name] of Object.entries(reportWithIterator)) {
    if (parseInt(index) === (reportWithIterator.length - 1)) {
      nameList += name;
    } else {
      nameList += `${name} | `;
    }
  }
  return nameList;
}
