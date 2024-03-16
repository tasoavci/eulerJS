// Problem 47
// Distinct Primes Factors

function primeFactorsCount(n) {
    const factors = new Set();
    let divisor = 2;
    while (n >= 2) {
        if (n % divisor === 0) {
            factors.add(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    return factors.size;
}

function findConsecutiveNumbers(targetFactors) {
    let consecutive = 0, num = 2;
    while (true) {
        if (primeFactorsCount(num) === targetFactors) {
            consecutive++;
            if (consecutive === targetFactors) return num - targetFactors + 1;
        } else {
            consecutive = 0;
        }
        num++;
    }
}

console.log(findConsecutiveNumbers(4));
