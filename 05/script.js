// 01
let figure = `square`;
switch (figure) {
    case `square`:
        console.log (`square has 4 sides`);
        break;
    case `circle`:
        console.log (`circle has not sides`);
        break;
    case `triangle`:
        console.log (`triangle has 3 sides`);
        break;
    default:
        console.log (`any figure`);
        break;
};
// 02
let sum = 0;
for(let i=1; i<21; i++){
    if(i%2==0){
        sum = sum+i};
}
console.log(`${sum}`);
// 03
for(let i=1; i<10; i++){
    console.log(`${i} * 2 = ${i*2}`);
    console.log(`${i} * 3 = ${i*3}`);
    console.log(`${i} * 4 = ${i*4}`);
    console.log(`${i} * 5 = ${i*5}`);
    console.log(`${i} * 6 = ${i*6}`);
    console.log(`${i} * 7 = ${i*7}`);
    console.log(`${i} * 8 = ${i*8}`);
    console.log(`${i} * 9 = ${i*9}`);
};
// 04
for (let i=10; i>0; i--){console.log(`${i}`)};
// 05
let number=Number( prompt(`Write number`));
if (number%2==0){console.log(`doubles`);}
else{console.log (`unpaired`)};
// 06
for (let i=1; i<10; i++){
    if(i%2==0){
        {console.log(`${i}`)}  
        break;
    }
};
// 07
for (let i=1; i<10; i++){
    if(i%2!=0) {continue;}
    {console.log(`doubles ${i}`);}
};



    






