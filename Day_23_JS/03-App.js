let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para was clicked! ✨");
    
});
 let box = document.querySelector("div");
 box.addEventListener("mouseenter",function () {
    console.log("mouse inside the div 😎");
 });

 let btn = document.querySelector("button");
 let h1 = document.querySelector("h1");
 let h3 = document.querySelector("h3");
 let i = document.querySelector("i");


 function changeColor (){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
 }
 p.addEventListener("click",changeColor);
 btn.addEventListener("click",changeColor);
 h1.addEventListener("click",changeColor);
 h3.addEventListener("click",changeColor);
 i.addEventListener("click",changeColor);




 let inp = document.querySelector("input");
 inp.addEventListener("keydown", function (event){
    console.log(event.code);
    if(event.code == ArrowRight){
        console.log("Arrow moves Right");
    }
    if(event.code == ArrowLeft){
        console.log("Arrow moves Left");
    }
    if(event.code == ArrowUp){
        console.log("Arrow moves Forword");
    }
    if(event.code == ArrowDown){
        console.log("Arrow moves Backword");
    }
 });
//  -------------------------------------------------