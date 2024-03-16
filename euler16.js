// Problem 16
// Power Digit Sum

function sumOfDigits(base, exponent) {
    let number = BigInt(base) ** BigInt(exponent);
    let sum = 0n;
    let digits = number.toString();

    for (let digit of digits) {
        sum += BigInt(digit);
    }

    return sum;
}

console.log(sumOfDigits(2, 1000).toString());
