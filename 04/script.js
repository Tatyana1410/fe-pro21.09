let number1=Number (prompt (`введите число 1`));
let number2=Number (prompt (`введите число 2`));
let number3=Number (prompt (`введите число 3`));
if (number1>number2 && number1>number3){console.log(`число 1-самое большое`);}
else if (number2>number1 && number2>number3){console.log(`число 2-самое большое`);}
else if(number3>number1 && number3>number2){console.log(`число 3-самое большое`);}

let numberMonth=Number(prompt(`введите номер месяца( от 1 до 12)`));
if (numberMonth<3){console.log(`месяц зимы`);}
else if (numberMonth<6){console.log(`месяц весны`);}
else if (numberMonth<9){console.log(`месяц лета`);}
else if (numberMonth<12){console.log(`месяц осени`);}
else if (numberMonth==12){console.log(`месяц зимы`);};

let number4 = Number(prompt(`введите число`));
if (number4<0){console.log(`число отрицательное`);}
else if (number4==0){console.log(`число = 0`);}
else if (number4>0){console.log(`число положительное`);};

let number5 = Number(prompt(`введите величину угла в градусах`));
let result = number5<90?`угол острый`:`угол тупой`;
console.log(result)

let number6 = Number(prompt(`enter your rating (0-100)`));
if (number6>89){console.log(`your have A`);}
else if (number6>79){console.log(`your have B`);}
else if (number6>69){console.log(`your have C`);}
else if (number6>59){console.log(`your have D`);}
else if (number6<60){console.log(`your have F`);};
console.log(`your new mark ${++number6}`);
result2 = number6>=60?`you entered`: `didn't get in`;
console.log(result2)















