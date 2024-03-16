// Problem 25
// 1000-digit Fibonacci Number

function findFibonacciIndex(digits) {
    let first = BigInt(1);
    let second = BigInt(1);
    let index = 2n;
    const limit = BigInt('1' + '0'.repeat(digits - 1));

    while (second < limit) {
        let temp = first + second;
        first = second;
        second = temp;
        index++;
    }

    return index.toString();
}

console.log(findFibonacciIndex(1000)); 
