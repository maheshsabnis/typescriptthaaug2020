let emps =[
    {EmpNo:101,EmpName:'Mahesh',Salary:3000},
    {EmpNo:102,EmpName:'Ramesh',Salary:7000},
    {EmpNo:103,EmpName:'Tejas',Salary:8000},
    {EmpNo:104,EmpName:'Amit',Salary:5500}
];
let res= emps.filter((e,i)=> {
    return e.Salary > 7000;
});
console.log(JSON.stringify(res));