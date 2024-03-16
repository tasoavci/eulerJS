// Problem 49
// Prime Permutations

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findPrimePermutations() {
    const primes = [];
    for (let i = 1001; i < 10000; i += 2) {
        if (isPrime(i)) primes.push(i);
    }

    for (let i = 0; i < primes.length; i++) {
        for (let j = i + 1; j < primes.length; j++) {
            const k = primes[j] + (primes[j] - primes[i]);
            if (k < 10000 && isPrime(k) && arePermutations(primes[i], primes[j]) && arePermutations(primes[i], k)) {
                if (primes[i] !== 1487) {
                    return '' + primes[i] + primes[j] + k;
                }
            }
        }
    }
}

function arePermutations(a, b) {
    const strA = a.toString().split('').sort().join('');
    const strB = b.toString().split('').sort().join('');
    return strA === strB;
}

console.log(findPrimePermutations());
