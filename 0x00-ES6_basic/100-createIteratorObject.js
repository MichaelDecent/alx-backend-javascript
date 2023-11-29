export default function createIteratorObject(report) {
  const employeeList = [];

  for (const nameList of Object.values(report.allEmployees)) {
    employeeList.push(...nameList);
  }
  return employeeList;
}
