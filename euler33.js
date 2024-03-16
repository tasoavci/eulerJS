// Problem 33
// Digit Cancelling Fractions

function digitCancellingFractions() {
    let resultDenominator = 1;
    let resultNumerator = 1;

    for (let numerator = 10; numerator < 100; numerator++) {
        for (let denominator = numerator + 1; denominator < 100; denominator++) {
            let n = numerator % 10;
            let d = Math.floor(denominator / 10);
            if (n === d && numerator * (denominator % 10) === (Math.floor(numerator / 10)) * denominator) {
                resultNumerator *= numerator;
                resultDenominator *= denominator;
            }
        }
    }

    for (let i = resultNumerator; i > 1; i--) {
        if (resultNumerator % i === 0 && resultDenominator % i === 0) {
            resultNumerator /= i;
            resultDenominator /= i;
        }
    }

    return resultDenominator;
}
console.log(digitCancellingFractions());
