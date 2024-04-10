let gameSeq = [] 
let userseq = [] 

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function () {
    if(started == false){
        console.log("Game is started");
        started = true;
        levelup();
    }
});

function gameFlash(btnFlash) {
    btnFlash.classList.add("flash");
    setTimeout(function () {
        btnFlash.classList.remove("flash");
    }, 250);
}
function userFlash(btnFlash) {
    btnFlash.classList.add("userflash");
    setTimeout(function () {
        btnFlash.classList.remove("userflash");
    }, 250);
}

function levelup() {
    level++;
    h2.innerText = `Level${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor= btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randcolor);
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkLevel() {
    console.log("level is :",level);
}

function btnPress () {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkLevel();

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


