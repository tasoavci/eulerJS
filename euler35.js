// Problem 35
// Double-base Palindromes

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function rotations(str) {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.join(''));
        arr.push(arr.shift());
    }
    return result;
}

function circularPrimes(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (rotations(String(i)).every(rot => isPrime(Number(rot)))) {
            count++;
        }
    }
    return count;
}
console.log(circularPrimes(1000000)); 
