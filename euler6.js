// Problem 6
// Sum Square Difference

function findDifference(n) {
    let sumOfSquares = 0;
    let squareOfSum = 0;

    // Calculate sum of the squares
    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
    }

    // Calculate square of the sum
    for (let i = 1; i <= n; i++) {
        squareOfSum += i;
    }
    squareOfSum *= squareOfSum;

    // Calculate the difference
    let difference = squareOfSum - sumOfSquares;

    return difference;
}

console.log(findDifference(100));
