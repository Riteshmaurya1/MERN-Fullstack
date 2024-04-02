// SetInterval ( Fuunction ,timeout)
console.log("Hi there!");
let id =  setInterval(()=> {
    console.log("Apna college !");
},200);
console.log("Hi there2!");
console.log(id);
clearInterval(id);// for clearing set interval