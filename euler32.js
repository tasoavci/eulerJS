// Problem 32
// Pandigital Products

function isPandigital(num) {
    let digits = num.toString().split('');
    let pandigitalSet = new Set(digits);
    return digits.length === pandigitalSet.size;
}

function pandigitalProducts(n) {
    const products = new Set();
    for (let i = 1; i < 10 ** (n - 1); i++) {
        for (let j = i; j < 10 ** (n - 1) / i; j++) {
            let concatenated = `${i}${j}${i * j}`;
            if (concatenated.length === n && isPandigital(concatenated)) {
                products.add(i * j);
            }
        }
    }
    return [...products].reduce((a, b) => a + b, 0);
}
console.log(pandigitalProducts(9)); 
