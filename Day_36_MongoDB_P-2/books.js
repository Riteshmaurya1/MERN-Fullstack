const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
}


/* Creating a Schema which name is bookSchema*/

const bookSchema = mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low for Amazon selling"],
    },
    discount:{
        type:Number,
        default:0, 
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },

});

/* Creating a collection which name is Book*/

const Book = mongoose.model("Book",bookSchema);

/* Inserting the data into the Book collection*/

// let book1 = new Book({
//     title:"Marvel comics V2",
//     author:"Salim Abdul😁",
//     price:456,
//     // category:"fiction",
//     genre:["comics","superheros","fiction"]
// });
// book1.save()
// .then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

/* Validation in Upadte & Errors */
Book.findByIdAndUpdate(
    "663e488c7bbcd97cb4724848",
    {price:-741},
    // {runValidators: true}
)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err.errors.price.properties.messege);
    });

