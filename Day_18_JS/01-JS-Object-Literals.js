// const student = {
//     name:"Ritesh",
//     age:21,
//     marks : 72.4,
//     Email : "riteshkumar04284@gmail.com"
// };
// console.table(student);


//

// const post ={
//     username:'Ritesh maurya',
//     content:'This is my #firstPost',
//     likes: 178,
//     reposts:52,
//     tags:["Apna collage","Delta"]
// };
// console.log(post);
// post.likes++;
// console.log(post.likes);



// Add/ update Value

// const student ={
//     name : "Ritesh",
//     email : "ritesh@gmail.com",
//     age: 20,
//     marks:74.4,
//     city:"Lucknow"
// };
// student.age=21;// Update Number
// console.table(student);
// student.name="Uttam"; //Update String
// console.table(student);
// delete(student.city); // Delete string
// console.table(student);


// Object of Object

//  const classInfo = {
//     ritesh:
//         {
//             age:21,
//             rollNo:2103630130018
//         },
//     uttam:
//         {
//             age: 12,
//             rollNo:2103630130024
//         },
//      sunand:
//          {
//              age:25,
//              rollNo:22036301090004
//          }
//  };
// console.log(classInfo);
// console.log(classInfo.ritesh);
// console.log(classInfo.sunand.rollNo);



// Array Of Object

const classInfo = [
        {
            age: 21,
            rollNo: 2103630130018
        },
        {
            age: 12,
            rollNo: 2103630130024
        },
        {
            age: 25,
            rollNo: 22036301090004
        }
];
console.log(classInfo);
classInfo[0]= {
    age: 28,
    rollNo: 21036301090004,
    name:"ritesh"
}
console.log(classInfo);
