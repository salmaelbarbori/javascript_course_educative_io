//In JS there two approches of OOP: 
//Class-based vs Prototype-based
class OOP {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
        this.school = "ESI";
    }
}
var student = new OOP ("salma", 23);
console.log (`student name: ${student.name}`);
console.log (`student age: ${student.age}`);
console.log (`student school: ${student.school}`);