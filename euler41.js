// Problem 41
// Pandigital Prime

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPandigital(n) {
    let digits = n.toString().split('').sort().join('');
    return digits === Array.from({ length: digits.length }, (_, i) => i + 1).join('');
}

function largestPandigitalPrime() {
    for (let n = 7654321; n >= 1234567; n -= 2) {
        if (isPandigital(n) && isPrime(n)) {
            return n;
        }
    }
    return -1;
}

console.log(largestPandigitalPrime());
