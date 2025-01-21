// const sum = (x,y,output) => {
//     let temp = x+y;
//     output (temp);
// }
// let add = sum (10,20,(sum) => (console.log("sum:", sum)))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("start")
// function long (){
//     for (let i=0;i<1e9; i++){}
//     console.log("long task completed")
// }
// long();
// console.log("end")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("first")
// setTimeout (()=>{
//     console.log("time out completed")
// },3000)
// console.log("last")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
// // async/await 
//  const fun1 =async () =>{
//     console.log("first")
//  await setTimeout (()=>{
//     console.log("time out completed")          //doesnot run in settimeout function
// },3000)
// console.log("last")
//  }
//  fun1()

///////////////next program for async/await///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const success =true;
//             if (success){
//                 resolve("data fetched");
//             }else{
//                 reject("error fetching");                                   //this function makes the program wait and run sequencially
//             }
//         },2000);
        
//     })
// }
// async function displayData(){
//     console.log("initial")
//     const data = await fetchData();
//     console.log(data);
//     console.log("final")
// }
// displayData();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { isUtf8 } = require("buffer")
const fs = require("fs")
fs.readFile("product.js",'utf8',(err,data)=>{
    if(err){
        console.error("error reading file",err);
        return;
    }
    console.log("file content", data);
})