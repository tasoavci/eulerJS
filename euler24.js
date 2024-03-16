// Problem 24
// Lexicographic Permutations

function findNthPermutation(n) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let permutation = [];
    let k = n - 1;
    let factorial = digits.map((_, i, arr) => arr.length - i - 1)
        .reduce((acc, val) => acc * val, 1);

    while (digits.length > 0) {
        factorial = factorial / digits.length;
        let index = Math.floor(k / factorial);
        permutation.push(digits.splice(index, 1)[0]);
        k = k % factorial;
    }

    return permutation.join('');
}

console.log(findNthPermutation(1000000)); 
