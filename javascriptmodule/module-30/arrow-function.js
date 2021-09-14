// old system 1
function add1 (num1,num2){
    const sum = num1 + num2;
    return sum;

}
// update system 1 
function add2 (num1,num2){
    return num1 + num2;;
}


// / update system 3
const add3 = function add (num1,num2){
    return num1 + num2;
}
const sum2 = add2(15,17);
// console.log(sum2);


// / update system 3 annonymas function
const add4 = function(num1,num2){
    return num1 + num2;
}
const sum4 = add2(15,17);
// console.log(sum4);


// arrow function 
const add5 = (num1,num2) => num1 + num2;
const sum5 = add5(15,17);
console.log(sum5)



























// document.getElementById('my-btn').onclick = function handleEvevnt(){

