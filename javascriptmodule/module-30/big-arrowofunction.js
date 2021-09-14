const add5 = (num1,num2) => num1 + num2;
const sum5 = add5(15,17);
console.log(sum5);

// multiplication 
const multyply = (num1,num2,num3) => num1*num2*num3;
const result = multyply(4,5,6);
// console.log(result);

// একটা পেরামিটার হলে 
const tentimes = (num) =>num*10;
// const output = tentimes(17);
// console.log(output);

// একটা পেরামিটার হলে ব্রাকেট না দিলে অ ছলে 

const fivetimes = num =>num*5;
const output = fivetimes(19);
// console.log(output);

// another way to declare arrow function 
const getname = () => 'milad lord';
const valuename = getname();
// console.log(valuename);

// arrow special case for multiline case
const domath = (x,y) =>{
const sum = x + y;
const diff = x -y;
const result = sum * diff;
const output = result *5;
// সিঙ্গেল লাইন হলে রিটান লাগবে না ডাবল লাইন হ্লে রিটান লাগবে
return output;

}
const overall = domath(12,5);
console.log(overall);

    
