// Problem 28
// Number Spiral Diagonals

function spiralDiagonalsSum(n) {
    if (n === 1) return 1;

    let sum = 1;

    for (let layer = 3; layer <= n; layer += 2) {
        let corner = layer * layer;
        sum += corner;
        for (let i = 1; i <= 3; i++) {
            sum += (corner - i * (layer - 1));
        }
    }

    return sum;
}

console.log(spiralDiagonalsSum(1001)); 
