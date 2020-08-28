const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest("employeeTest test toString() output when no throw error",t => {
  let employee = new Employee("Jenkin","engineer");
  t.is(employee.toString(),"Jenkin (engineer)");
})