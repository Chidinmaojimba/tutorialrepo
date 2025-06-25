const persons = [
    {
        name: "chidinma",
        age: 10,
        gender: "female",
        level: "200"
    },
    {
        name: "david",
        age: 30,
        gender: "male",
        level: "100"
    },
    {
        name: "john",
        age: 20,
        gender: "male",
        level: "300",
    },
    {
        name: "joy",
        age: 15,
        gender: "female",
        level: "400"
    }
]


const person = {
    name: "davis",
    age: 25,
    gender: "female",
    height: "6,2"
}

// for (value in person) {
//     console.log(value, person[value]);
// }

const student = {...person, age: 40, level: "300"}
console.log(student)