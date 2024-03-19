// Format of string method
// stringName.method(args)

let name ="Ritesh";
let matchedName = name.indexOf("h");// Received at index 5
let NotmatchedName = name.indexOf("G");// Received at index -1
console.log(matchedName);
console.log(NotmatchedName);

// Method Chaining
let Thisisstr = "  hello ";
let Upadtedstr = Thisisstr.trim().toLocaleUpperCase();// remove extra space and Convert in to Uppercase
console.log(Upadtedstr);


// Slice Of string
let str = "ILoveCoding";
console.log(str.slice(1,5));// The first Number is starting Index And Last number is ending String
console.log(str.substring(1,5));// This is second method to find substring
console.log(str.replace("Love","love"));// in this line we replace the Love sub-Str to the love
console.log(str.repeat(3));




