 // forEach

 let arr = [1, 2, 3, 4, 5];

let print =  function(val) {
    console.log(val);
};
arr.forEach(print);
console.log("This is end of basic foreach loop!");
 arr.forEach((val) =>
 {
     console.log(val);
 });
 console.log("This is end of forEach loop using basic arrow  function !");

 arr.forEach(function(el) {
     console.log(el);
 });
 console.log("This is end of forEach loop using basic function !");


 // forEach in array objects

 let arr1 = [
     {
         name:"Ritesh",
         marks:96,
     },
     {
         name:"Uttam",
         marks:98,
     },
     {
         name:"Sunand",
         marks:95,
     },
 ];
 arr1.forEach((student) =>
 {
     console.log(student.name);
     console.log(student.marks);
 });

