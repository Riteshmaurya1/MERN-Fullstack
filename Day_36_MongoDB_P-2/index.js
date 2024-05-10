const mongoose = require("mongoose");

main().then((res) => 
    {console.log("connection successful")})
.catch(err => console.log(err));
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/Test_DB");
}

/* <-----Schema------>*/
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

/* <-----Models------>*/
//const User = mongoose.model("User",userSchema); 
const Students = mongoose.model("Students",userSchema); 

/* <-----Insert Data------>*/

// const user1 = new Students({
//     name:"Ritesh",
//     email:"Ritesh@gmail.com",
//     age:21,
// });
// user1.save().then((res) =>{
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


/* <-----Insert Data Multiple------>*/

// Students.insertMany([
//     {
//         name:"Tony",email:"Tony@gmail.com",age:50
//     },
//     {
//         name:"Mamitha",email:"Mamitha@gmail.com",age:24
//     },
//     {
//         name:"Nilsen",email:"Nilsen@gmail.com",age:21
//     },
// ]).then((data) =>{
//     console.log(data);
// });


/* <-----Find in Data Docs------>*/
//Students.findById("663d262b105e9b23afe2f35c"),
Students.find({age:{$gte:0}})
.then((res) =>{
    console.log(res);
}).catch((err) =>{
    conaole.log(err);
});



/* <-----Update Data Docs------>*/
Students.updateOne({name:"Mamitha"},{age:22})
.then((res) => {
    console.log(res);
}).catch((err) =>{
    console.log(err);
});

/* <-----Delete Data Docs------>*/
Students.deleteOne({name:"Ritesh"}).then((res) => {
    console.log(res);
});
