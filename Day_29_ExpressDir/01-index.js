const express = require("express");
const app = express();
// craete a port 3000 for running app
// let port = 8080;
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


// app.get("/",(req,res)=>{
//     res.send("You Connected to root path !");
// });
// app.get("/Apple",(req,res)=>{
//     res.send("You Connected to Apple path !");
// });
// app.get("/Mango",(req,res)=>{
//     res.send("You Connected to Mango path !");
// });
// app.get("*",(req,res)=>{
//     res.send("This path does not exist!");
// });
// app.get("/Banana",(req,res)=>{
//     res.send("This path does not exist!");
// });

// app.post("/",(req,res)=>{
//     res.send("You sent post request to connect !");
// });

// PathParameters 
app.get("/",(req,res) => {
    res.send("Hello,i am root");
});
app.get("/:username/:id",(req,res) => {
    let{username,id} = req.params;
    // res.send(`Welcome @${username} to our web page and your id is ${id}`);
    let htmlstr = `<h1>Welcome @${username} to our web page and your id is ${id}</h1>`;
    res.send(htmlstr);
});
app.get("/search",(req,res) => {
    // console.log(req.query);
    // res.send("No result is here");
    let{q} = req.query;
    if(!q){
        res.send("<h1>Nothing searched!!</h1>");
    }
    res.send(`<h1>search results for query : ${q}</h1>`);
    console.log(`search results for query : ${q}`);
})