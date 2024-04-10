// function savetoDb(data,sucess,failure) {
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if (internetSpeed > 4) {
//         sucess();
//     } else {
//         failure();
//     }
    
// }
// savetoDb("Apna college", 
// () => 
//     {
//         console.log("Your data is saved 🎃");
//         savetoDb("Hello world!", 
//         () => 
//         {
//             console.log("sucess 2 : Data Was saved");
//             savetoDb("ritesh", 
//             () => 
//             {
//                 console.log("sucess 3 : Data saved");
//             },
//              () => 
//             {
//                 console.log("failure 3 : Data not saved");
//             }
//             );
//         },
//         () => 
//         {
//             console.log("failure 2 : weak connection.😤 ");
//         });
//     },
// () => 
//     {
//         console.log("weak connection.data not saved 😤 ")
//     }, 
// );

// // Promises resolve & reject

// function savetoDb(data) {
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10)+1;
//         if (internetSpeed > 4) {
//             resolve("success : Data was saved!");
//         }
//         else{
//             reject("failure : Weak Connection !");
//         }
//     });
//  }


// Promises -> then & catch

// let request = savetoDb("Apna College");
// request
// .then( ( )=> {
//     console.log("Promise 1 was resolved !");
//     return savetoDb("ritesh maurya 1");
// })
// .then(() => {
//     console.log("Promise 2 was resolved !");
//     return savetoDb("ritesh maurya 2");
// })
// .then(() => {
//     console.log("Promise 3 was resolved !");
// })
// .catch(() => {
//     console.log("Promise Was Rejected !");
// })

//  Result & Error in Promises

// let request = savetoDb("Apna College");
// request
// .then( (result)=> {
//     console.log("Promise 1 was resolved !");
//     console.log(result);
//     return savetoDb("ritesh maurya 1");
    
// })
// .then((result) => {
//     console.log("Promise 2 was resolved !");
//     console.log(result);
//     return savetoDb("ritesh maurya 2");
    
// })
// .then((result) => {
//     console.log("Promise 3 was resolved !");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("Promise Was Rejected !");
//     console.log(error);
// })




 // Callbacks using 

h1  = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
            }, delay);
    })
}
changeColor("red",1000)
.then(() => {
    console.log("red color was completed!");
    return changeColor("orange",1000);
})
.then(() => {
    console.log("red color was completed!");
    return changeColor("green",1000);
})
.then(() => {
    console.log("red color was completed!");
    return changeColor("yellow",1000);
})
.then(() => {
    console.log("blue color was completed!");
});
// changeColor("red",1000,() => {
//     changeColor("orange",1000,() => {
//         changeColor("yellow",1000,()=> {
//             changeColor("green",1000);
//         });
//     });
// });