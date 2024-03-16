// Problem 9
// Special Pythagorean Triplet

function findPythagoreanTripletProduct(n) {
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let c = n - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return "No Pythagorean triplet found";
}

console.log(findPythagoreanTripletProduct(1000));
