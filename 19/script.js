let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!"
let patStr = /[A-Z]/g;
let strArr = textStr.match(patStr);
console.log (strArr);

let operation = "5 плюс 7 = 3";
let patOp = /[0-9]/g;
console.log(operation.match(patOp));

let word = /\b[A-Za-z]{5}\b/g;
console.log(textStr.match(word));
