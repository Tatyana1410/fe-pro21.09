let userValue = prompt (`write your variant`, `rock, paper, scissors`);
userValue.toLowerCase().trim();
let arrVariants = [`rock`, `paper`, 'scissors'];
let compValue = arrVariants[Math.floor (Math.random(arrVariants)*arrVariants.length)];
console.log(compValue)
if (userValue === compValue){
    alert(`dead heat, try again`)}
    else if (userValue==`rock`&& compValue==`scissors`){
        alert( `You win`);
    }
    else if (userValue==`paper`&& compValue==`rock`){
        alert( `You win`);
    }
    else if (userValue==`scissors`&& compValue==`paper`){
        alert( `You win`);
    }
    else{
        alert(`You lost. Try again!`);
    };

// 02
function mathMin(x,y){
    a = Math.min(x, y);
};
mathMin(5,7);

function mathMax(x,y){
    b = Math.max(x, y);
};
mathMax(5,7);

// 03
function mathPow(x,y){
    console.log(Math.pow(x,y));
};
mathPow(5,2);

// 04
function mathFloor(x){
    c = Math.floor(x);
};
mathFloor(5.6)

function mathCeil(x){
    d = Math.ceil(x);
};
mathCeil(5.6);

// 05
let today = new Date();
function yearDate(x){
    console.log(today.getFullYear()-x);
};
yearDate(34);

// 06
let todayDate = new  Date();
console.log(todayDate.toLocaleString());

// 07
let newString = `table bad sofa`;
let ArrnewString = newString.split(` `);

// let result = ArrnewString.map(word=>word.toUpperCase());
// console.log(result)

console.log(ArrnewString.map(word=>word.toUpperCase()));



