// let btns = document.querySelectorAll("button");
// for (btn of btns){
//    btn.onclick = printHello;
//    btn.onmouseenter = function () {
//       console.log("This is onmouseenter Event!")
//    };
// }
// function printHello(){
//    alert("this is Onclick Event");
// }; 


// Event Listeners

let btns = document.querySelectorAll("button");
for (btn of btns){
   // btn.addEventListener("click",sayHello);
   // btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick", function (){
      console.log("This is duble click Listener!");
      alert("You duble clicked me!");
   });

}
function sayHello(){
   alert("First:Event Listener!");
}; 
function sayName(){
   alert("Secondt:Event Listener!");
}; 




