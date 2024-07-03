const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Define blueprint of Schema */
const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/green-trees-under-white-sky-during-daytime-uyyRJA2an4o",
        set: (v) => 
            v ==="" 
        ? "https://unsplash.com/photos/green-trees-under-white-sky-during-daytime-uyyRJA2an4o" 
        :v,

    }, 
    price:Number,
    location:String,
    country:String,
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;


