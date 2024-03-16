// Problem 38
// Pandigital Multiples

function isPandigital(num) {
    let digits = num.toString().split('').sort().join('');
    return digits === '123456789';
}

function largestPandigitalMultiple() {
    let largest = 0;
    for (let i = 1; i < 10000; i++) {
        let concatenatedProduct = '';
        for (let n = 1; concatenatedProduct.length < 9; n++) {
            concatenatedProduct += i * n;
        }
        if (concatenatedProduct.length === 9 && isPandigital(concatenatedProduct)) {
            largest = Math.max(largest, parseInt(concatenatedProduct, 10));
        }
    }
    return largest;
}

console.log(largestPandigitalMultiple());
