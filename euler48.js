// Problem 48
// Self Powers

function selfPowers(lastDigits, limit) {
    let sum = BigInt(0);
    for (let i = 1; i <= limit; i++) {
        sum += BigInt(i) ** BigInt(i);
    }
    const sumStr = sum.toString();
    return sumStr.substring(sumStr.length - lastDigits);
}

console.log(selfPowers(10, 1000));
