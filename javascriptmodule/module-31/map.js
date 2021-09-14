// const numbers = [4,5,6,7,8];
// const output2 =[];

// old system 
// function doubleit(number){
//     return number*2;
// }
//  new system or arrow function 
// const doubleit = number => number*2;

// for(const number of numbers){
//     const result = doubleit(number);
//     output2.push(result);
// }
// console.log(output2);

// উপরের সব কাজ গুলু এক্লাইনে করা জায় মেপ এর মাদ্দমে এটা কে মেপ বলে
const numbers = [4,5,6,7,8];
const doubleit = number => number*2;
// const output = numbers.map(number => number*2);
// const output = numbers.map(x => x*2);
const output = numbers.map(doubleit);
console.log(output);

const squares = numbers.map(x => x*x)
console.log(squares);