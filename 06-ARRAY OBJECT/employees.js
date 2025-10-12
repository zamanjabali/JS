let employees = [
    {  name: "basit",  salary: 50000 },
    {  name: "ayyan",  salary: 60000 },
    {  name: "zaman",  salary: 70000 },
];
let employeesUpdated = employees.map((emp) => ({
    name: emp.name,
    salary: emp.salary + 10000,
}));
console.table(employeesUpdated);
