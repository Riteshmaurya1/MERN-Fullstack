const student = {
    name: 'Ritesh Maurya',
    email: 'student@example.com',
    password: 'password',
    math:85,
    eng:96,
    phy:75,
    getAvg() {
        console.log("The avg marks is given below :-")
        let avg = (this.math+this.eng+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
        console.log(this);
    },
}
console.log(student.getAvg());