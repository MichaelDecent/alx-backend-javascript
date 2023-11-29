export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const [dept, employee] of Object.entries(employeesList)) {
    allEmployees[dept] = [...employee];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
