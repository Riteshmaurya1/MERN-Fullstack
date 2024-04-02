let id =  setInterval(() =>
{
    console.log("This is Ritesh Maurya");
},2000);
setTimeout(() =>
{
    clearInterval(id);
    console.log("Clear interval run");
},11000);