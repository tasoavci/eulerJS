// Problem 37
// Truncatable Primes

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function isTruncatablePrime(num) {
    if (num < 10) return false;
    const strNum = num.toString();
    for (let i = 1; i < strNum.length; i++) {
        if (!isPrime(parseInt(strNum.slice(i), 10)) || !isPrime(parseInt(strNum.slice(0, -i), 10))) {
            return false;
        }
    }
    return true;
}

function sumOfTruncatablePrimes(n) {
    let sum = 0;
    let found = 0;
    let i = 11;
    while (found < n) {
        if (isTruncatablePrime(i)) {
            sum += i;
            found++;
        }
        i += 2;
    }
    return sum;
}

console.log(sumOfTruncatablePrimes(11)); 
