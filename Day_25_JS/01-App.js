function hello(){
    console.log("inside hello fnx"); // third run
    console.log("Hello"); // fourth run
}
function demo() {
    console.log("calling hello function!"); //second run
    hello();// then call hello
}
 console.log("calling demo  fnx");// first run 
 demo();// then call demo
 console.log("Byee ! Done.");// fifth run



//  Stack is LIFO type data structure
// for inserting a element in stack called push => Top of the stack
// for deleteing element in stack called pop of the element
// 
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three() {
    let ans = two() + one() ;
    console.log("The value is :",ans);
}
// Breakpoints -> (used in)browsers
three();

// Single thread in JavaScript(asynch nature in javascript)
setTimeout(function() {
    console.log("Apna collage!");
},4000);
console.log("Hello....");

// Callbacks Nesting -> Callback Hell
h1  = document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
    }, delay);

}
changeColor("red",1000,() => {
    changeColor("orange",1000,() => {
        changeColor("yellow",1000,()=> {
            changeColor("green",1000);
        });
    });
});

// Promises 
