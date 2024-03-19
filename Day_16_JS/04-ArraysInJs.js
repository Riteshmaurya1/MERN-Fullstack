// let Students = ["Ritesh","Uttam","Nawab","Ashish"];
// console.table(Students);
// let nums = [1,2,3,4,5.1];
// let mixedarr = ["Ritesh",2,2.5];
// console.log(nums);
// console.log("This is Data Type of Array : "+typeof Students);
// console.log("This is Mixed array : "+ mixedarr);
// mixedarr[3] = "Maurya";
// console.log("This is Updated Mixed array : "+ mixedarr);

// Arrays Methods => Push,Pop,Unshift,Shift
let Cars = ["bmw","audi","suv","suzuki"];
Cars.push();
Cars.unshift("thar");
Cars.shift();
console.table(Cars);
console.log(Cars.indexOf("bmw"));
console.log(Cars.includes("maruti"));

// add two arrays
let primaryC = ["red","blue","green","yellow"];
let secondaryC = ["pink","light-blue","light-green","marron"];
let newC = primaryC.concat(secondaryC);
console.table(newC.reverse());
console.table(newC.slice(5,8));// it is not change value in the original array
console.table(primaryC.splice(0,1,));// it is change in the original array
console.table(primaryC);
// add in the original array
console.table(primaryC.splice(0,1,"Black","Maron"));// it is change in the original array
console.table(primaryC);

//





