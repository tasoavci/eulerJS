// Problem 10
// Summation of Primes

function sumPrimesBelow(limit) {
    let sieve = [];
    let primes = [];
    let sum = 0;

    for (let i = 2; i < limit; i++) {
        sieve[i] = true;
    }

    for (let i = 2; i * i < limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j < limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    for (let i = 2; i < limit; i++) {
        if (sieve[i]) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimesBelow(2000000));
