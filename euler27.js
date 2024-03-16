// Problem 27
// Quadratic Primes

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findQuadraticPrimes(range) {
    let maxPrimes = 0;
    let product = 0;

    for (let a = -range + 1; a < range; a++) {
        for (let b = -range; b <= range; b++) {
            let n = 0;
            while (isPrime(n * n + a * n + b)) {
                n++;
            }
            if (n > maxPrimes) {
                maxPrimes = n;
                product = a * b;
            }
        }
    }

    return product;
}

console.log(findQuadraticPrimes(1000)); 
