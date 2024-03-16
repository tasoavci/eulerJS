// Problem 2
// Even Fibonacci Numbers

function sumEvenFibonacci(limit) {
    let sum = 0;
    let a = 1;
    let b = 2;

    while (b <= limit) {
        if (b % 2 === 0) {
            sum += b;
        }
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return sum;
}

const limit = 4000000;
console.log(sumEvenFibonacci(limit));

