// Problem 3
// Largest Prime Factor

function findLargestPrimeFactor(number) {
    let largestPrime = 2;

    while (number % 2 === 0) {
        number /= 2;
    }

    for (let i = 3; i * i <= number; i += 2) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }

    if (number > 2) {
        largestPrime = number;
    }

    return largestPrime;
}

console.log(findLargestPrimeFactor(600851475143));


