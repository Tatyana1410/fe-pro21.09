class Person {
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log (`Hello ${this._name}`);
    }
};
let newUser = new Person (`John`, 30)
newUser.sayHello();

class Student extends Person{
    constructor (name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
    study(){
        console.log(`This student ID${this._studentId}`);
    }
};
let newStudent = new Student (`Tom`, 20, 123);
newStudent.study();
