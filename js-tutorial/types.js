/*
string e.g "david"
boolean e.g true, false
integer (number) e.g 1, 2, 4, 5, 6
function
object
array e.g [1,3,5,4,3]
*/

// "" & "david"

// 0 & 1 - infiniti

// [] & [3,2,32,2]

// let numbers = [20,30,40,50, 743, 32]
// var numbers = [20, 30, 40, 50]
const numbers = [20, 30, 40, 50]
console.log(numbers)
numbers[0] = 300

console.log(numbers)

for (num in numbers) {
    console.log(num)
}