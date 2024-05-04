const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

const{ v4 :uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Line 7 to 10 is define the files import from the outside of this file 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


// Posts
let posts = [
    {
       id:uuidv4(),
       username:"apnacollege",
       content:"i love coding"
    },
    {
        id:uuidv4(),
       username:"codehlp",
       content:"i love eating"
    },
    {
        id:uuidv4(),
       username:"techbuzz",
       content:"i love shopping"
    }
];
// allocation of server

app.get("/posts",(req,res) => {
    // res.send("Welcome to the Main page of server!");
    res.render("index.ejs",{posts});
});

// For Creation of new posts

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});


// For the Post method in creation of new post

app.post("/posts", (req,res) => {
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({ id,username ,content});
    res.redirect("/posts");
});

// For the Post method in creation of new id's

app.get("/posts/:id", (req,res) => {
    let{id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res) => {
    let{id} = req.params;
    let newContent = req.body.content;
    
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

// for edit the post content
app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find(((P) => id === P.id));
    res.render("edit.ejs",{post});
});

// for Delete the post 
app.delete("/posts/:id",(req,res) => {
    let { id } = req.params;
    posts = posts.filter(((P) => id !== P.id));
    res.redirect("/posts");
    alert("Post Deleted");
})

// it is for the define the port
app.listen(port,() => {
    console.log("Listening to port : 8080");
});