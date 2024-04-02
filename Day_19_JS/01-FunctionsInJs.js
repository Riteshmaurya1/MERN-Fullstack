// Function Definition (Telling JS)

function hello() {
    console.log("Hello World!");
}
hello();

function randomnumber() {
    let dice = Math.random();
    dice *= 6;
    dice = Math.floor(dice);
    dice += 1;
    console.log("The Dice Is : "+dice)
}
randomnumber();