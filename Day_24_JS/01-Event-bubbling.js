let div = document.querySelector("div");
let lis = document.querySelector("li");
let ul = document.querySelector("ul");

div.addEventListener("click", function () {
    console.log("Div was clicked!");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked!");
  
    
});
 for(li of lis ){
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked!");
    });
 }