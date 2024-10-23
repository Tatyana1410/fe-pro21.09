// Home-work-2

let Result1=(`${(5+ +3) * 2 -7}`);
let Result2=(`${(10/2) ** 2}`);
let Result3=(`${2*(4+3)-(8/2)}`)
let Result4=(`${(15%4)+5}`)
let Result5=(`${3-(2**4)}`)
console.log(Result1 , Result2 , Result3 , Result4 , Result5)
let Number1=4
let Number2=9
console.log(`${Number1 + Number2}`);
console.log(`${Number1 - Number2}`);
console.log(`${Number1 * Number2}`);
console.log(`${Number1 / Number2}`);
console.log(`${Number1 % Number2}`);
console.log(`${Number1 ** Number2}`);


// Home-work-3

let number1=1;
let number2=2;
console.log(`Compare result 1 and 2 ${1==2}`);
console.log(`Compare result 1 and 2 ${number1===number2}`);
alert(`Compare result 1 and 2 ${number1===number2}`);

let promptNumber=prompt(`Write number`, "Hier");
let result= (`% operation  ${promptNumber%2}`);
console.log(result);
console.log(`парное ${ result === 0}`);
// console.log(`непарное ${ result != 0}`);

let ageUser = prompt(`Your age`);
alert( `You can use this page ${ageUser>=18}`);
// alert( `You can't use this page ${ageUser<18}`);

let price = prompt (`What price`);
let amount = prompt(`How much`);
console.log(`${price * amount}`);

let Price = prompt(`What price`);
alert(`discounted price ${Price/2}`);