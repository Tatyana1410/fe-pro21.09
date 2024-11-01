// 01
let pushArr = [1,2,3];
// pushArr.push(7)

function  pushFn (arr, value){arr.push(value)};
pushFn (pushArr,7)

// Array.prototype.push.call(pushArr, 7,)
console.log(pushArr)

// 02
let popArr = [1, 2, 3, 4];
// popArr.pop();

function  popFn (arr){arr.pop()};
popFn (popArr)

// Array.prototype.pop.call(popArr);
console.log(popArr);

// 03
let unshiftArr = [1,2,3,4,5];
// unshiftArr.unshift(`a`);

function unshiftFn (arr, value){arr.unshift(value)};
unshiftFn (unshiftArr,`b`);

console.log(unshiftArr);

// 04
let shiftArr = [1,2,3,4,5];
// shiftArr.shift();

function shiftFn (arr){arr.shift()};
shiftFn (shiftArr);

console.log(shiftArr);

// 05
let fillArr = [1,2,3,4,5];
fillArr.fill(`a`, 2, 4);

// function fillFn (arr, value, start, end){
//     arr.fill (value, start, end)
// }
// fillFn  (fillArr, `a`, 2, 4);

console.log(fillArr);

// 06
let spliceArr = [1,2,3,4,5];
let newSpliceArr= spliceArr. splice(1,3);

// function spliceFn (arr, start, deleteCount){
//     arr.splice (start, deleteCount)
// }
// spliceFn  (spliceArr, 1, 3);

console.log(spliceArr);
console.log(newSpliceArr);

// 07
let reverseArr = [1,2,3,4,5];
// reverseArr.reverse();
function reverseFn (arr){
    arr.reverse ()
}
reverseFn  (reverseArr);
console.log(reverseArr);

// 08
let arrayOne = [1,2,3,4,5];
let arrayTwo = [7,8,9];
let concatArr=[];
//arrayOne = arrayOne.concat(arrayTwo);
function concatFn (arr1, arr2){
    concatArr = arr1.concat(arr2);
}
concatFn(arrayOne, arrayTwo);

console.log(concatArr);

// 09
let includesArr = [1,2,3,4,5];
// console.log (includesArr.includes(3));

function includesFn (arr,value ){
   (console.log (arr.includes(value)));
}
includesFn(includesArr,3);

// 10
let filterArr = [1,2,3,4,5,6,7,8,9];
    function checkValue(value){
        return value%2===0;
    }
let filterResult = filterArr.filter(checkValue);
console.log(filterResult);

function choose(value){
    return value < 5;
}
let secondResult = filterArr.filter(choose);
console.log(secondResult);

// 11
let mapArr = [1,2,3,4,5]
// let newMapArr = mapArr.map((value)=>value**2);
// console.log(newMapArr);

function mapFn (arr1, callbackFn){
   return array = arr1.map((x)=>callbackFn(x))
}
function callBackFn (value){
        return value +`a`;
    };

console.log(mapFn (mapArr, callBackFn));






