// async function greet(){
//    // throw ("404 Page Not Found");
//     return "Hello";
// }
// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was :",result);
// })
// .catch((error) => {
//     console.log("Promis aws rejected with err",error)
// });

// Await Keyword

// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo () {
//   await  getNum();
//   await  getNum();
//   await  getNum();
//   await  getNum();
//   await  getNum();
//   await  getNum();
// }


// color change using await function 

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5 ) + 1;
//             if(num > 3)
//             {
//                 reject("Promise rejected !");
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");

//         },delay);
//     });
// }

// async function demo () {
//     try {
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("orange",1000);
//     } catch (err) {
//         console.log("error cought !");
//         console.log(err);
//     }
   

//     let a = 5;
//     console.log(a);
//     console.log("new number = ",a + 3);


// }


//  API -> Application Programming Interface

// JSON -> 
// www.json.com
let jsonData = '{"fact":"This is ritesh kumar and he currently learning MERN  full stack ","length":61}';
let validRes = JSON.parse(jsonData);
console.log(validRes.fact);

let student = {
    name:"ritesh kumar",
    age:23,
};


// Testing API Requests
// Tools ->1.Hoopscoth,2.Postman


// Ajax -> 

// Https Verbs

// Status Code 
// 200 -> Ok
// 404 -> Not Found
// 400 -> Bad Request
// 500 -> Internal Server Error


// Add Information in URL's

 // https://www.google.com/search?q=harry+porter (where q => Key,harry => Value)

 // ?name=ritesh&marks=85

 // http Headers

 // our First Request => Using fetch
let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((Re) => {
//     console.log(Re);
//     return Re.json(); 
// })
// .then((data) => {
//     console.log("data 1:=",data.fact);
//     return fetch(url);
// })
// .then((Re) => {
//     return Re.json(); 
// })
// .then((data2) => {
//     console.log("data 2:=",data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR --",err);
// });
// console.log("This is Ritesh Maurya");


// Using Fetch with async

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let ans = await res.json();
//         console.log(ans.fact);

//         let res2 = await fetch(url);
//         let ans2 = await res2.json();
//         console.log(ans2.fact);

//     }catch(err){
//         console.log("Error --",err);
//     }
//     console.log("Byee!");
// }
