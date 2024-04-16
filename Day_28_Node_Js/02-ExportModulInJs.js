let randNumber = Math.floor(Math.random() * 9) + 1;
if(randNumber >= 5)
{
    console.log("This is the o/p of another file ");
    // module.exports = console.log("RandomNumber is := "+randNumber);
    module.exports = randNumber;
}
else {
    console.log("Number is wrong !");
}
