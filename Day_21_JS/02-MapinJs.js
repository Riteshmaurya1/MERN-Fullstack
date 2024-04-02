// Map in JavaScript Array Methods

let students = [
    {
        name:"Nawab",
        marks:96,
    },
    {
        name:"Rahul",
        marks:98,
    },
    {
        name:"Shashi",
        marks:95,
    },
];
let gpa = students.map((val) =>
{
    return val.marks / 10;
});
console.log(gpa);


// Filter in JavaScript

let nums = [1,2,3,4,5,6,7,8,9,4,52];
let ans  = nums.filter((el) =>
{
    return el % 2 == 0;// even -> true// odd -> false
});
console.log(ans);

