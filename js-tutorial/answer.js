const person = [{
            name: "chidinma",
            age: 10,
            gender: "female",
            level: "200",
            seniority: "Junior",
            year: "2024",
            salary: "20000"
},
{
    
            name: "Maxwell",
            age: 50,
            gender: "female",
            level: "600",
            seniority: "senior",
            year: "2021",
            salary: "50000"   
}

]

const employee = {...person, name: "Deborah", age: 50,  seniority: "Junior", gender: "Male"}


console.log(employee);




//  - Modify the array of objects (persons) below to contain some other key informations as an employee using the spread operation.
//     - Informations like: salary, year of employment, seniority e.g junior & senior, qualification

//     - Write a program to log the name, age, gender, and seniority in this format: name age gender seniority

//     - e.g david 29 male senior