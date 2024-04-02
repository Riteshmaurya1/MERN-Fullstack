function sum (...args){
    // Arguments
    for (let i = 0; i < args.length; i++) {
        console.log("You Gave Us: ",args[i]);
    }
}

 // for sum using args and reduce function 
function sum(...args ){
    return  args.reduce((sum,el) => sum+el);
}


// For min using the args and reduce function
function min(msg,...args){
    console.log(msg);
    return args.reduce((min,val) => {
        if(min > val){
            return val;
        }else{
            return min;
        }
    });
}
 //Destrucuture
 let names = ["ritesh","Uttam","rahul","shashi"];
 let [rahul,ritsh] = names;
 console.log(names);

// 
const student = {
    name:"Rahul",
    age:18,
    class:12++,
    subjects:["Hindi","English","Math"],
    username:"rahul@321",
    password:"abcd",
};
  let { username:user,password } = student;

