// Write your solution in this file!
const employee ={
    name: 'Sam', 
    streetAddress: '11 Broadway'
};
function updateEmployeeWithKeyAndValue (employee, key, value){
    const emp = {... employee};
    emp[key] = value;
    return emp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey (employee, key){
    const empl = {...employee};
    delete empl[key]
    return empl
}
function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key]
    return employee
}
