let color = "green";
 if (color === "red"){
     console.log(`Not Safe So Stop`);
 }
 else if(color === "Yellow")
 {
     console.log(`Start Your Vehicle And ready`);
 }
 else if(color === "green")
 {
     console.log(`Go And Enjoy Your Ride`);
 }
 console.log("------------------------------------------------------");
 //
let size = "M";
 if (size === "XL"){
     console.log("Price is : 250");
 }
 else if(size === "L"){
     console.log("Price is : 200");
 }
 else if(size === "M"){
     console.log("Price is : 100");
 }
 else{
     console.log("Price is : 50");
 }

console.log("------------------------------------------------------");
 //
let marks = 30;
if (marks >= 40){
    console.log("Pass with Grade C");
    if (marks >= 60 ){
        console.log("Pass with Grade B");
        if (marks >= 80){
            console.log("Pass with Grade A");
        }
    }
}else
{
    console.log("You is Fail");
}
//
console.log("--------------------------------------------------------------");
let str = "apple";
if(str[0] === 'a' && str.length > 3)
{
 console.log("This is good String ");
}
else
{
    console.log("This is Not Good String");
}
//
console.log("------------------This is Switch Statement-------------------");
//
let rang ="green";
switch (rang) {
    case "red":
        console.log(`Not Safe So Stop`);
        break;
    case "yellow":
        console.log(`Start Your Vehicle And ready`);
        break;
    case "green":
        console.log("Go And Enjoy Your Ride");
        break;
    default :
        console.log("Broken Light");
}