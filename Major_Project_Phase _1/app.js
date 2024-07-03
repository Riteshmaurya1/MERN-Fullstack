const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");
const methodeOverride = require("method-override");
const ejsMate = require("ejs-mate");




/* Fatching collection from the MongoDB */
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


/* Set the views folder path */
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


/* It is using for the data parsing */
app.use(express.urlencoded({extended:true}));

/* It is used for converting post to put method*/
app.use(methodeOverride("_method"));

/* it is used for the importing html and css purposes */
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")))



/* Making connection to DB */
main().
then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}


/* Create Home Route */
app.get("/",(req,res) => {
   res.send("Hi,I am root"); 
});


/* Index Route for EJS file*/
app.get("/listings", async(req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});


/* New & Create Route */
app.get("/listings/new",(req,res) => {
    res.render("listings/new.ejs")
});

/* Create Show Route */
app.get("/listings/:id" , async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{ listing });
});


/* Create Routes */
app.post("/listings",async(req,res) => {
   // let {title, description, image, price, country, location} = req.body;
   const newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});



/* Edit listing Routes */
app.get("/listings/:id/edit",async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing });
});

/* Update Route */
app.put("/listings/:id", async (req,res) => {
    let{id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing });
    res.redirect("/listings");
});

/* Route for Deleting Listing  */

app.delete("/listings/:id",async(req,res) =>{
    let{id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});


// /* Create testListing  Route */
// app.get("/testListing",async (req,res) => {
//    let sampleListing = new Listing({
//     title:"My New Villa",
//     description: "By the Beach",
//     price:1280,
//     location:"Calangute,Goa",
//     country:"India",
//    });

//    await sampleListing.save();
//    console.log("Sample was saved");
//    res.send("successful testiong");
// });



/* Listening Port */
app.listen(8080,() => {
    console.log("Server is listening to Port 8080");
});


