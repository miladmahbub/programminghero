// const number = [44,23,34,32,54,5,78];
// let sum = 0;
// for(i = 0; i < number.length; i++ ){
// const element = number[i];
// // console.log(element);

// sum = sum + element;

// }
// console.log(sum);



// with function

function arraytotal (number){
    let sum = 0;
    for (let i = 0; i < number.length; i++){
    const element = number[i];
    sum = sum + element;

    }
    return sum;
}
const total =arraytotal([32,45,67]);
console.log(total);
