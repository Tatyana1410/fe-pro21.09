window.onload=function(){

// 1
let x=10;
let numberValue = 5;

let firstPromise = new Promise (resolve=>
    resolve (firstValue = x+numberValue)).
    then(firstValue=>secondValue=x*firstValue).
    then(secondValue=>secondValue-10).
    catch(console.error());
    console.log(firstPromise);

    // 2
function FnPromise(string){
    return new Promise(resolve=>
        resolve(
            secondString = string.toUpperCase())).
        then(
            secondString=>setTimeout(function(){console.log(secondString)},2000)).
        catch(console.error())
}
FnPromise(`hello`);

    // 3

function compareFn (x,y){
    return new Promise((resolve,reject)=>{
        if(x>y){
            resolve(console.log(`${x} more than ${y}`))
        }
        if(x<y){
            resolve(console.log(`${y} more than ${x}`))
        }
        else {
            reject (`Числа рівні`)
        }
        })
    .catch(console.error())
};
compareFn (5,2)




}
