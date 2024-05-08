const { faker }  =  require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"delta_app",
  password:"Ritesh@123",
});
/*  IT IS FOR GENERATE FAKE USERS DATA AND ID'S*/

let getRandomUser = () => {
  return [
  faker.string.uuid(),
  faker.internet.userName(),
  faker.internet.email(),
  faker.internet.password(),
  ];
}


/* <-------For Routing----------->*/
app.listen ("8080", () => {
  console.log("Server is listening in 8080 port.");
});



/* <--------For Home Page Route--------> */
app.get("/", (req,res) => {
  let q =`SELECT count(*) FROM user`;
try{
  connection.query(q,(err,result) => {
  if(err) throw err;
  let count = (result[0]["count(*)"]);
  res.render("home.ejs",{count});
});
} catch(err){
  console.log(err);
  res.send("Some error in database!");
} 
});


/* <--------For User Page Route--------> */
app.get("/user",(req,res) => {
  let q = `SELECT * FROM user`;
  try{
    connection.query(q,(err,users) => {
    if(err) throw err;
    res.render("showusers.ejs",{users});
  });
  } catch(err){
    console.log(err);
    res.send("Some error in DB!");
  } 
})



/* <--------For Edit Route--------> */
app.get("/user/:id/edit",(req,res) =>{
  let{id} =req.params;
  let q = `SELECT * FROM user WHERE userId ='${id}'`;
  
  try{
    connection.query(q,(err,result) => {
    if(err) throw err;
    let user = result[0];
    res.render("edit.ejs",{user});
    
  });
  } catch(err){
    console.log(err);
    res.send("Some error in DB!");
  } 
});


/* <--------For Update DB Route--------> */
app.patch("/user/:id",(req,res) => {
  let{id} =req.params;
  let {password:formPass,username:newUsername} = req.body;
  let q = `SELECT * FROM user WHERE userId ='${id}'`;

  try{
    connection.query(q,(err,result) => {
    if(err) throw err;
    let user = result[0];
    if(formPass != user.password)
      {
        res.send("Wrong Password!");
      }
      else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE userId = '${id}'`;
        connection.query(q2,(err,result) => {
          if(err) throw err;
          res.redirect("/user");
        });
      }
    // res.send(user);
    
  });
  } catch(err){
    console.log(err);
    res.send("Some error in DB!");
  }
});


/* INSERT DATA IN FORM OF BULK MODEL*/
//let q = "INSERT INTO user (userId ,username, email, password) VALUES ?";
//  let data = [];
//  for(let i = 0;i <= 100;i++)
//   {
//     data.push(getRandomUser());// 100 fake users data
//   }