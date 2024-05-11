const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js'); 
const methodOverride = require("method-override");

/* This is define the views folder */

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


/* This is for the show connection is form or not  */

main().then(res => console.log("Connection successful"))
.catch(err => {console.log(err)});

async function main () {
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}



/* Chat 1 is created  */
let Chat1 = new Chat({
    from:"Ragini",
    to:"Yogini",
    msg:"Hi,Yogini How Are You",
    created_at: new Date()
});

Chat1.save()
.then((res )=> {
    console.log(res)
});

/* This is Index Routes */
app.get("/chats",async(req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{ chats });
    
});


/* Create Routes */
app.post("/chats",(req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at:new Date()
    });
    newChat.save()
    .then((res) => {
        console.log("Chat was Saved");
    }).
    catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});


/* New Routes */
app.get("/chats/new",(req,res) => {
    res.render("new.ejs");
});


/* Edit Chat Routes */
app.get("/chats/:id/edit",async(req,res) => {
    let {id}  = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});


/* Update Chat Routes */
app.put("/chats/:id",async(req,res) => {
    let{id} = req.params;
    let{msg : newMsg} = req.body;
    let updatedChat =await Chat.findByIdAndUpdate(id,
    {msg:newMsg},
    {runValidators :true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});


/* Delete Chat Routes */
app.delete("/chats/:id",async(req,res) => {
    let {id } = req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


/* This comment is related to define App Routes which is check the Port is in working condition or not */
app.get("/", (req,res) => {
    res.send("Root is working");
});


/* this is show the port */
app.listen(8080,()=> {
    console.log("Server is listining on port 8080!");
});

