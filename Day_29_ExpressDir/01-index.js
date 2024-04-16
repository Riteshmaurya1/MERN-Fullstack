const express = require("express");
const app = express();
// craete a port 3000 for running app
let port = 8080;
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});

// Handling reuests   
// app.use((req,res )=> {
//     // console.log(req);
//     console.log("new incomming request recieved!");
//     // res.send({
//     //     name:"Ritesh Kumar",
//     //     roll_No:2103630100018,
//     // }); 
//     // At a Time one response is run
//     let code = "<h1>Fruits</h1><br><ul><li>Apple</li><li>Banana</li><li>PineApple</li></ul>";
//     res.send(code);
// });



// Sending a Responce

// app.use((req,res )=> { 
//     // At a Time one response is run
//     let code = "<h1>Fruits</h1><br><ul><li>Apple</li><li>Banana</li><li>PineApple</li></ul>";
//     res.send(code);
// });

// Routing  


app.get("/",(req,res)=>{
    res.send("You Connected to root path !");
});
app.get("/Apple",(req,res)=>{
    res.send("You Connected to Apple path !");
});
app.get("/Mango",(req,res)=>{
    res.send("You Connected to Mango path !");
});
app.get("*",(req,res)=>{
    res.send("This path does not exist!");
});

app.post("/",(req,res)=>{
    res.send("You sent post request to connect !");
});




