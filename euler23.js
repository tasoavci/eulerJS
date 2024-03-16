// Problem 23
// Non-Abundant Sums

function getAbundantNumbers(limit) {
    const abundantNumbers = [];
    for (let i = 12; i <= limit; i++) {
        if (sumOfDivisors(i) > i) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}

function canBeWrittenAsAbundant(number, abundantNumbers) {
    let i = 0;
    let j = abundantNumbers.length - 1;
    while (i <= j) {
        let sum = abundantNumbers[i] + abundantNumbers[j];
        if (sum === number) return true;
        if (sum < number) i++;
        else j--;
    }
    return false;
}

function sumOfNonAbundantSums(n) {
    const abundantNumbers = getAbundantNumbers(n);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (!canBeWrittenAsAbundant(i, abundantNumbers)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfNonAbundantSums(28123));
