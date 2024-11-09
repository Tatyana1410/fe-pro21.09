let firstArr = [1,2,3,4,5];
let secondArr = [`Tom`, `Tim`];
let thirdArr = [...firstArr,...secondArr];
console.log(thirdArr);

function restFn(str, ...arg){
    console.log(str,arg);
};
restFn(`sentance`, 1,2,3);

function fnRest (...arg){
    let sum = 0;
    for (i=0;i<arg.length; i++){
    sum =(sum+i)
    }
    return sum/arg.length;
};
console.log(fnRest(2,3,4,5));

function typeFn (...arg){
    console.log (typeof i);
};
typeFn(5,7);

let value = true;
if (typeof value == `number`){
    console.log (`It is number`)}
    else if (typeof value == `string`){
        console.log (`it is string`)
    }
    else console.log (`it is another type`);


