const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest("employeeTest : test toString() output when no throw error with name=Jenkin and type = engineer",t => {
  let employee = new Employee("Jenkin","engineer");
  t.is(employee.toString(),"Jenkin (engineer)");
})

employeeTest("employeeTest : test toString() output when no throw error with name=Jenkin and type = manager",t => {
  let employee = new Employee("Jenkin","manager");
  t.is(employee.toString(),"Jenkin (manager)");
})

employeeTest("employeeTest : test toString() output when no throw error with name=Jenkin and type = salesman",t => {
  let employee = new Employee("Jenkin","salesman");
  t.is(employee.toString(),"Jenkin (salesman)");
})

employeeTest("employeeTest : test constructor() output when throw error",t => {
  try{
    let employee = new Employee("Jenkin","engineer1");
    t.fail();
  }catch (e){
    t.is(e.message,"Employee cannot be of type engineer1")
  }
})