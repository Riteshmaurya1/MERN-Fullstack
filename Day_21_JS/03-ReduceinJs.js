let ritesh = [1,2,2,3,4,5];
let finalVal = ritesh.reduce((a, b) =>
    a + b
);
console.log(finalVal);

// Maximum In Array
  let arrr = [-1,2,2,3,4,5,56];
  let maxi = -1;
  for (let i = 0; i < arrr.length; i++) {
      if(arrr[i] > maxi) {
          maxi= arrr[i];
      }
  }
  console.log(maxi);

  // with the help of reduce function

let max = arrr.reduce((max,el) => {
    if (el > max) {
        return el;
    }
    else
    {
        return max;
    }
});
console.log(max);
let min  = arrr.reduce((min,el) => {
    if(min < el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

let arr1 = [-1,2,2,3,4,5,56];
console.log(Math.max.apply(Math,arr1));


// copy data spreed
let marchent = {
    name:"Ritesh Kumar",
    age: 8,
    birth:'10/11/2004'
};
const datacopy = {...marchent,id:12012};
console.log("This is Copy Data File!");
console.table(datacopy);

console.log("This is Original File!");
console.table(marchent);

