// Problem 21
// Amicable Numbers

function sumOfDivisors(num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum;
}

function sumOfAmicableNumbers(n) {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        let divSum = sumOfDivisors(i);
        if (divSum > i && sumOfDivisors(divSum) === i) {
            sum += i + divSum;
        }
    }
    return sum;
}

console.log(sumOfAmicableNumbers(10000)); 
