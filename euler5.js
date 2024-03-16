// Problem 5 
// Smallest Multiple

function gcd(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findSmallestMultiple(n) {
    let smallestMultiple = 1;
    for (let i = 2; i <= n; i++) {
        smallestMultiple = lcm(smallestMultiple, i);
    }
    return smallestMultiple;
}

console.log(findSmallestMultiple(20));
