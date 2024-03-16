// Problem 29
// Distinct Powers
function distinctPowers(n) {
    const terms = new Set();
    for (let a = 2; a <= n; a++) {
        for (let b = 2; b <= n; b++) {
            terms.add(BigInt(a) ** BigInt(b));
        }
    }
    return terms.size;
}
console.log(distinctPowers(30)); 
