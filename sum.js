// // var
// // functional scope

// const { type } = require("express/lib/response")

// var x = 100

// if(true){
//     console.log("x: ",x)
//     var x = 500
// }
// console.log("xp: ",x)

// let x = 100
// console.log("x: ",x)
// //block scope variable
// if(true){
//     let x = 500
//     console.log("x: ",x)
// }
// console.log("xp: ",x)

// var x = 100
// console.log("x: ",x)
// var x = 500
// console.log("x: ",x)
// let x = 100
// console.log("x: ",x)
// let x = 500
// console.log("x: ",x)

// const x = 100
// console.log("x: ",x)
// x= 500
// console.log("x: ",x)

// const / let

// C: int, float, boolean, string, char, double, long, short, byte
// JS: number , boolean, string, arrays, objects

// let x =[1,23,3] 
// let y = {name: "John", age: 25}
// console.log("typeof x: ",typeof x)
// console.log("typeof y: ",typeof y)

// console.log("name: ", y.name)
// console.log("age: ", y.age)

// console.log("asdf: ",x[1] )

// let students = [
//     {name: "John", age: 25, test: [1,2,3]},
//     {name: "Jane", age: 23},
//     {name: "Doe", age: 24}
// ]
// console.log("student: ", students[0].test[2])

// OPerators: 
// Arithmetic: +, -, *, /, %, ++, --
// ++x, x++, --x, x--, 10%
// Logical: &&, ||, !

// true && true // true
// true && false // false
// false && true // false
// false && false // false

// true || true // true
// true || false // true
// false || true // true
// false || false // false

// console.log(true || false)

// Comparison: ==, ===, !=, !==, >, <, >=, <=

// == // value
// if(1 != "1"){
//     console.log("Here")
// }else{
//     console.log("There")
// }
// console.log(1 === "1")

// Conditional Statements: if , else, else if, switch   
const marks = 30
// if(marks>60){
//     console.log("Passed")
// }else if(marks<60 && marks>40){
//     console.log("Just Passed")
// }else{
//     console.log("Failed")
// }

// switch(marks){
//     case 100:
//         console.log("Passed")
//         break
//     case 99:
//         console.log("Just Passed")
//         break
//     default:
//         console.log("Failed")
// }

// Loops: for, while, do while, for in, for of, forEach, map , filter, reduce   

// for(let i=0; i<10; i++){
//     console.log("i: ",i)
// }

// let i = 0 
// while(i<10){
//     console.log("i: ",i)
//     i++
// }

// let i = 0
// do{
//     console.log("i: ",i)
//     i++
// }while(i<10)

// let fruits = ["apple", "banana", "mango", "orange"]
// fruits.forEach((fruit,index,arr)=>{

//     console.log("fruit: ", fruit, index, arr)
// })

// let x = [1,2,3,4,5]
// let y = x.map((i)=>{
//     return i*2
// })
// console.log("y: ",y)

//Functions


// function sum (a,x) {
//     return a+x
// }
// const asum = (a,x) => {
//     return a+x;
// }
// console.log("sum: ",sum("1","2"))
// console.log("asum: ",asum("1","2"))

// for in  and for of

let student = {
    name: "John",
    age: 25,
    marks: 90
}

// for(let key in student){
//     console.log("key: ",key, "value: ",student[key])
// }

// for(let x in "students"){
//     console.log("x: ", x)
// }

const temp = [1,2,3,4]
for(let x in temp){
    console.log("x: ", x)
}
for(x of temp){
    console.log("x: ", x)
}