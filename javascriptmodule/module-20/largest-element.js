function largestelement(numbers) {

    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}
const age = [12, 15, 30, 28, 18, 34, 17]
const oldest = largestelement(age);
console.log(oldest);



// task: find the smallest numbr in arry 