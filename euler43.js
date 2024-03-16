// Problem 43
// Sub-string Divisibility

function hasSubStringDivisibility(number) {
    const divisors = [2, 3, 5, 7, 11, 13, 17];
    for (let i = 0; i < divisors.length; i++) {
        let subString = parseInt(number.substring(i + 1, i + 4));
        if (subString % divisors[i] !== 0) {
            return false;
        }
    }
    return true;
}

function generatePandigitals(n) {
    const pandigitals = [];
    const digits = Array.from({ length: n }, (_, i) => i).join('');

    function permute(prefix, remaining) {
        if (remaining.length === 0) {
            pandigitals.push(prefix);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                permute(prefix + remaining[i], remaining.substring(0, i) + remaining.substring(i + 1));
            }
        }
    }

    permute('', digits);
    return pandigitals;
}

function sumOfSubStringDivisiblePandigitals(n) {
    const pandigitals = generatePandigitals(n);
    return pandigitals
        .filter(hasSubStringDivisibility)
        .reduce((sum, num) => sum + parseInt(num, 10), 0);
}

console.log(sumOfSubStringDivisiblePandigitals(9)); 
