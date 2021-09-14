const numbers = [23,65,99,21,34];
// console.log(numbers);
// console.log(...numbers);
const max = Math.max(23,56,99);
const maxinarray = Math.max(numbers);
const maxinarrayspread = Math.max(...numbers);
console.log(max,maxinarray,maxinarrayspread);



function getSum(a, b=9){return a+b;} 
console.log(getSum(2, 7));

