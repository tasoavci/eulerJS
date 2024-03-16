// Problem 14
// Longest Collatz Sequence

function collatzSequenceLength(n) {
    let length = 1;
    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
        length++;
    }
    return length;
}

function findStartingNumberWithLongestChain(limit) {
    let longestLength = 0;
    let startingNumber = 0;

    for (let i = 1; i < limit; i++) {
        let length = collatzSequenceLength(i);
        if (length > longestLength) {
            longestLength = length;
            startingNumber = i;
        }
    }

    return startingNumber;
}

console.log(findStartingNumberWithLongestChain(1000000));
