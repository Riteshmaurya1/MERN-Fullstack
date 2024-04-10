let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value; 
    ul.appendChild(item );
    inp.value  = "" ;


    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("delete");

    item.appendChild(deletebtn);
    ul.appendChild(item);
    inp.value  = "" ;
});

 // -------For deletion-----------
ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
        let itemdel = event.target.parentElement;
        itemdel.remove();
        console.log("Item is deleted!");
    }
})

//   let delBtns = document.querySelectorAll(".delete");
//   for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
//   }
