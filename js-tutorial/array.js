const numbers = [20, 30, 40, 50, 60, 70, 80]

// console.log(numbers)
// numbers.push(100)

// console.log(numbers)

// numbers.pop()
// numbers.pop()
// console.log(numbers)

// numbers[2] = 60

// console.log(numbers)

// loops

// while, for in, for of, forEach
// forEach works on objects using a callback function to access its content

// for (indx in numbers) {
//     console.log(numbers[indx])
// }

// for (element of numbers) {
//     console.log(element)
// }

// let num = 1;
// while (num > 20000) {
//     console.log(num)
//     num = num + 1
// }

// for (i=0; i < 20; i++) {
//     console.log(i)
// }

// 0,20, 40, 60, 80, 100, 120....40000
// add the total

for (num = 0; num <= 40000; num+=20) {
    console.log(num)
}