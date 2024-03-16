// Problem 34
// Digit Factorials

function factorial(x) {
    let product = 1;
    for (let i = 2; i <= x; i++) {
        product *= i;
    }
    return product;
}

function sumOfDigitFactorials() {
    let sum = 0;
    let factorials = Array.from({ length: 10 }, (_, i) => factorial(i));
    let limit = 7 * factorials[9];

    for (let i = 10; i < limit; i++) {
        let digitFactorialSum = String(i).split('').reduce((acc, digit) => acc + factorials[digit], 0);
        if (digitFactorialSum === i) {
            sum += i;
        }
    }

    return sum;
}
console.log(sumOfDigitFactorials());
