function fibonacciseries(num) {
    if (typeof num != "number") {
        return "please give a number";
    }
    if (num < 2) {
        return "eneter a positive number garter than two"
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
const fibnacciseriess = fibonacciseries(13);
console.log(fibnacciseriess);