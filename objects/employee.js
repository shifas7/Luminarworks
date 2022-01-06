// key:value
var employee={
    eid:1000,
    ename:"shifas",
    salary:25000,
    designation:"developer",
    exp:2,

}
// console.log(employee.ename);
// employee.experience=2
// console.log(employee);
// console.log("gender" in employee);
if("exp"in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}
console.log(employee);