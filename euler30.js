// Problem 30
// Digit Fifth Powers

function sumOfDigitPowers(n) {
    const limit = n * (9 ** n);
    let sum = 0;
    for (let i = 2; i < limit; i++) {
        const digitPowerSum = String(i).split('').reduce((acc, digit) => acc + Math.pow(Number(digit), n), 0);
        if (digitPowerSum === i) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfDigitPowers(5)); 
