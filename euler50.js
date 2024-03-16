// Problem 50
// Consecutive Prime Sum

function getPrimes(limit) {
    const sieve = Array(limit).fill(true);
    const primes = [];
    for (let i = 2; i < limit; i++) {
        if (sieve[i]) {
            primes.push(i);
            for (let j = i * i; j < limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    return primes;
}

function consecutivePrimeSum(limit) {
    const primes = getPrimes(limit);
    let maxSum = 0, maxLength = 0;

    for (let i = 0; i < primes.length; i++) {
        let sum = 0;
        for (let j = i; j < primes.length; j++) {
            sum += primes[j];
            if (sum >= limit) break;
            if (j - i > maxLength && primes.includes(sum)) {
                maxLength = j - i;
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

console.log(consecutivePrimeSum(1000000));
