const mongoose = require('mongoose');
const Chat = require('./models/chat.js');




/* This is for the show connection is form or not  */
main()
.then(() => {
    console.log("Connection successful")
})
.catch((err) => 
    {console.log(err)}
);

async function main () {
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}


/* Chat 1 is created  */
Chat.insertMany([
    {
    from:"Ragini",
    to:"Yogini",
    msg:"Hi,Yogini How Are You",
    created_at: new Date()
    }
]);


/* Chats Data */
let allchats = [
    {
    from:"Ragini",
    to:"Yogini",
    msg:"Hi,Yogini How Are You",
    created_at: new Date(),
    },
    {
    from:"Amit",
    to:"ram",
    msg:"Can you send me some notes",
    created_at: new Date(),
    },
    {
    from:"Lakshman",
    to:"Bharat",
    msg:"You are elder Brother",
    created_at: new Date(),
    },
    {
    from:"Sita",
    to:"Hanuman",
    msg:"Sita mata says hanumna you are my protctor!",
    created_at: new Date(),
    }
];

Chat.insertMany(allchats);