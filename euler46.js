// Problem 46
// Goldbach's Other Conjecture

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findGoldbachFailure() {
    let num = 3, found = false;
    while (!found) {
        if (!isPrime(num)) {
            let isGoldbach = false;
            for (let j = 1; 2 * j * j < num; j++) {
                if (isPrime(num - 2 * j * j)) {
                    isGoldbach = true;
                    break;
                }
            }
            if (!isGoldbach) return num;
        }
        num += 2;
    }
}

console.log(findGoldbachFailure());
