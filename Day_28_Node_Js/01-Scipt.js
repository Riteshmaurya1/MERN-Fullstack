
 
// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log("hello",i);
// }
// console.log("Byee!");

// process 

let args = ["Ritesh Maurya","Uttam Maurya","Nawab Ali"];
for (let i = 0; i < args.length; i++) {
    console.log("Hello To",args[i]);
}
console.log("-----------------------------------");
// Expert in Files 

const someValue =  require("./02-ExportModulInJs");
console.log(someValue);

//imports Math file 
// const math =  require("./03-math.js"); // both are working but i prefer 
import {sum,mul} from "./03-math";
console.log("This is add := "+sum(3,5),mul(2,8));



// imports files from the directories
console.log("---------------------------------");
console.log("This printed file is imported from the fruits folder");
const allData = require("./Fruits");
console.table(allData);



