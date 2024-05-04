const express = require("express");
const app = express();
// const port = 8080; // if you run this code then uncomment this line
app.use(express.urlencoded({extended: true}));//this line of code is add becouse on the post request username & password is not recieved.
app.use(express.json);

app.get("/register",(req,res) => {
    let {user,password} = req.query;
    res.send(`standard GET responce. Welcome ${user}!`);
});

app.post("/register",(req,res) => {
    let {user,password} = req.body;
    res.send(`standard Post responce. Welcome ${user}!`);
});


app.listen(port,() => {
    console.log(`listening to port ${port}`);
});