document.getElementById(`text`);
document.getElementsByClassName (`content`);
document.getElementsByTagName (`p`);

document.querySelector (`li:first-child`);
document.querySelector (`li:last-child`);
document.querySelector(`li:nth-child(3)`);

console.log(document.querySelectorAll(`li`));
let Arr = Array.from (document.querySelectorAll(`li`));
console.log (Arr);

