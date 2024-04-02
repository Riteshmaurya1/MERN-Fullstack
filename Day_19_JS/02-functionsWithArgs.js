function printInfo(name,age) {
    console.log(`${name}'s age is ${age}.`);
}
function sum(number1,number2){
    val = number1 + number2;
    return val;
}
printInfo("Ritesh",25);
printInfo("Aditya",19);
printInfo("Anurag",16);
console.log(sum(2,5));





// concat

let str =  ["hi","hello","bye","!"];
 let printer = concat(str);
 console.log(printer);
function concat(str){
    let result = " ";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}


// what will be the output
let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    innerGreet();
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();


// function Expressions
const add = function(a, b){
    return a + b;

};
console.log(add(2,6));


// Higher Order Function
function multipleGreet(func,count){
    for(let i=1; i <= count;i++){
        func();
        console.log(i);
    }
}
let greeting = function(){
    console.log("hello");
}
multipleGreet(function () {console.log("namaste"+" ")},5);

// Methods in JS
let calculator = {
  add:function(a,b){
      return a+b;
  },
  subs:function(a,b){
      return a-b;
  },
  mul:function(a,b){
      return a*b;
  }
};
console.log(calculator.add(10,5));
console.log(calculator.subs(10,5));
console.log(calculator.mul(10,5));
console.log(Math.sin(0));


