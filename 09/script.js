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
    constructor (name, age, studentld){
        super(name, age);
        this._studentld = studentld;
    }
    study(){
        console.log(`${this._studentld}`);
    }
};
let newStudent = new Student (`Tom`, 20, `mathematic`);
newStudent.study();
