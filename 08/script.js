// 01
for( let i=0; i<5; i++){
    console.log(i);
};

let message = `test`;
function example(){
    if(true){
        let message = `hello, world`;
        console.log(message);
    }
    console.log(message);
};
example();

// 02
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for(const key in person){
    console.log(person[key]);
};

// 03
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for(const value of students) {
    console.log (value.name, value.age, value.grade)
};
