// Problem 45
// Triangular, Pentagonal, and Hexagonal

function isHexagonal(number) {
    const result = (Math.sqrt(8 * number + 1) + 1) / 4;
    return result === Math.floor(result);
}

function nextTPHNumber() {
    let n = 286;

    while (true) {
        const Tn = n * (n + 1) / 2;
        if (isPentagonal(Tn) && isHexagonal(Tn)) {
            return Tn;
        }
        n++;
    }
}

console.log(nextTPHNumber());
