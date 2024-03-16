// Problem 12
// Highly Divisible Triangular Number

function countDivisors(number) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (number / i === i) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function findTriangleNumber(divisors) {
    let number = 0;
    let i = 1;

    while (true) {
        number += i;
        if (countDivisors(number) > divisors) {
            return number;
        }
        i++;
    }
}

console.log(findTriangleNumber(500));
