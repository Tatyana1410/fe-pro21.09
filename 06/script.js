function sum (a,b){
    return a+b;
};
sum(1,2);
console.log (`${sum (1,2)}`);

function minus (a,b){
    return a-b;
};
minus(4,2);
console.log (`${minus(4,2)}`);

function multiply (a,b){
    return a*b;
};
multiply(4,5);
console.log (`${multiply(4,5)}`);

function divide (a,b){
    if( b === 0){
        return `you can't divide by zero`
    }
    else{
    return a/b;
}
};
divide(25,5);
console.log (`${divide(25,5)}`);

let sign = prompt(`Choose +, -, /, *`);
let a = Number (prompt(`write number 1`));
let b = Number (prompt(`write number 2`));

switch(sign){
    case `/`: function divide (a,b){
        return a/b;
    };
    console.log (`${divide(a,b)}`);
    break;
    case `+`:function sum (a,b){
            return a+b;
        };
        console.log (`${sum (a,b)}`);
    break;
    case `*`:function multiply (a,b){
             return a*b;
        };
        console.log (`${multiply(a,b)}`);
        break;
    case`-`: function minus (a,b){
                return a-b;
            };
            console.log (`${minus(a,b)}`);
            break;

}

// 02

let array = [`Tom`, `Ben`, `Tim`];
function wellcomeUser( array, hiUser){
    for( let i=0; i<array.length; i++){
        hiUser(array[i]);
    }
}
function hiUser(user){
    console.log(`Hello ${user}`)
}
wellcomeUser(array, hiUser)

// 03

// let hiUser = (user)=>
//     console.log(`Hello ${user}`);

// let wellcomeUser = (array, hiUser)
//     for(let i=0; i<array.length; i++){
//         hiUser(array[i])}; 

// wellcomeUser(array, hiUser)

// 04

function multiply (a, b=2){
    return a+b;
}
console.log (multiply(b));

// 05
let text=`someText`;
function TextCall (text,Look){
    Look(text);
}
 function Look (Name){
    console.log(`hi ${Name}`);}

 TextCall(text, Look)

// 06

function multiplyValues (a, b, c){
    return a*b*c;
}
