const student = {
    name:"Ritesh",
    marks:95,
    prop:this, // Global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks:  () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        },2000);
    },
    getInfo2: function () {
        setTimeout( function ()
        {
            console.log(this);
        },2000);
    },
};
console.log(student.getMarks());
console.log(student.getInfo1());
console.log(student.getInfo2());