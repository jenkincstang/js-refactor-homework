const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest("employeeTest : test toString() output when no throw error",t => {
  let employee = new Employee("Jenkin","engineer");
  t.is(employee.toString(),"Jenkin (engineer)");
})

employeeTest("employeeTest : test constructor() output when throw error",t => {
  try{
    let employee = new Employee("Jenkin","engineer1");
    t.fail();
  }catch (e){
    t.is(e.message,"Employee cannot be of type engineer1")
  }
})