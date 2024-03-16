// Problem 15
// Lattice Paths

function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function latticePaths(gridSize) {
    return binomialCoefficient(2n * BigInt(gridSize), BigInt(gridSize));
}

console.log(latticePaths(20).toString()); 
