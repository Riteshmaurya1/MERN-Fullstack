// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.sayHello = () => {
//     console.log("Hello, i am arr");
// };
// arr2.sayHello = () => {
//     console.log("Hello, i am arr");
// };

// Factory Function := A function tha t create's objects



// function PersonMaker(name,age) {
//     const person = {
//     name: name,
//     age: age,
//     talk (){
//         console.log(`Hi,my name is ${this.name}`);
//     },
//     };
//     return person;
// }
// let p1 = PersonMaker("Ritesh kumar",45);//copy
// console.log(p1);
// let p2 = PersonMaker("Uttam kumar",21);//copy
// console.log(p1);



// Constructors := doesn't return anything & start with capital


// function Person(name,age) {
//     this.name;
//     this.age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi,My name is ${this.name} & `);
//     console.log(`My age is ${this.age}`);
// }

// let p1 = new Person("Ritesh kumar",22);//instance
// console.log(p1);
// let p2 = new Person("Uttam kumar",21);//instance
// console.log(p2);

// Classes

// class Person {
//      constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi,My name is ${this.name} & `);
//         console.log(`My age is ${this.age}`);
//     }
// }
// let p1 = new Person("Ritesh kumar",22);//instance

// let p2 = new Person("Uttam kumar",21);//instance


// Inheritance

class Person{
    constructor(name,age){
        console.log("Person class constructure!");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi,I am ${this.name}`);
    }
}
class Student extends Person {
    constructor(name,age,marks){
        console.log("Student class constructure!");
        super(name,age);//parent class constructure is being called
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name,age,subject){
        console.log("Teacher class constructure!");
        super(name,age); // Parent class constructure is being called
        this.subject = subject;
    }
}
