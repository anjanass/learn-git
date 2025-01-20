// for(let i = 0; i<=50;i+=2){
//     console.log("i: ",i)
// }
// i=i+2

// function getLargest(arrx){
//     let max = arrx[0]
//     for(let i of arrx){
//         if(i>max){
//             max = i
//         }
//     }
//     return max
// }
// console.log(getLargest([1,2,33,4,5,6,7,8,9,10]))


// const getSquare = (x) => {
//     return x*x
// }

let numbers = [1,2,3,4,5,6,7,8,9,10]

let squares = numbers.filter((x)=>{
    return x%3===0
})
console.log("squares: ",squares)