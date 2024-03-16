// Problem 7
// 10001st Prime

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        if (count === n) {
            return num;
        }
        num++;
    }
}

console.log(findNthPrime(10001));
