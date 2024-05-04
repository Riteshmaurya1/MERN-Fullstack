
const express = require("express");
const app = express();
// const path = require("path");

// const port = 8080;

app.set("view engine","ejs");
//app.set("views",path.join(Day_30_Node-EJS,"/views"));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("home.ejs");
});


app.get("/hello",(req,res) => {
    res.send("This is Hello page!");
});

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs",{diceVal});
});

// Instagram EJS

app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
   if(data){
    res.render("instagram.ejs",{data});
   }
   else{
    res.render("error.ejs");
   }
});

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});