const persons = [
    {
        name: "chidinma",
        age: 10,
        gender: "female",
        level: "200",
    },
    {
        name: "David",
        age: 20,
        gender: "male",
        level: "100",
    },
    {
        name: "kossy",
        age: 50,
        gender: "male",
        level: "400",
    },
    {
        name: "Maxwell",
        age: 50,
        gender: "female",
        level: "600",     
    }
]

const modify = [
    {
        seniority: "Junior",
        year: "2024",
        salary: "20000"
    },
    {
        seniority: "senior",
        year: "2022",
        salary: "40000" 
    },
    {
        seniority: "senior",
        year: "2025",
        salary: "10000"   
    },
    {
        seniority: "senior",
        year: "2021",
        salary: "50000" 
    }
]
const employee = []
for (let i = 0; i < persons.length; i++) {
    employee.push({...persons[i], ...modify[i]})
}
console.log(employee)

const names = ["david", "joy", "chidinma"];
const other_names = ["ola", "samuel", "kossy"]


// for (let name of other_names) {
//     names.push(name)
// }

// console.log(names);

// const _add_names = [names, other_names]
// console.log(_add_names);

// const add_names = [...names, ...other_names]
// console.log(add_names)