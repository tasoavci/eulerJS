// Problem 44
// Pentagon Numbers

function isPentagonal(number) {
    const result = (Math.sqrt(24 * number + 1) + 1) / 6;
    return result === Math.floor(result);
}

function findMinimalPentagonalDifference() {
    let i = 1;
    let found = false;
    let D = Infinity;

    while (!found) {
        i++;
        const Pi = i * (3 * i - 1) / 2;

        for (let j = i - 1; j > 0; j--) {
            const Pj = j * (3 * j - 1) / 2;
            const sum = Pi + Pj;
            const diff = Pi - Pj;

            if (isPentagonal(sum) && isPentagonal(diff)) {
                D = Math.min(D, diff);
                found = true;
            }
        }
    }

    return D;
}

console.log(findMinimalPentagonalDifference());
