// Problem 20
// Factorial Digit Sum

function factorial(n) {
    let result = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

function sumOfDigitsInFactorial(n) {
    let factorialNumber = factorial(n);
    let sum = 0;
    let digits = factorialNumber.toString().split('');

    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }

    return sum;
}

console.log(sumOfDigitsInFactorial(100)); 
