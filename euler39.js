// Problem 39
// Integer Right Triangles

function integerRightTriangles(limit) {
    let result = 0;
    let maxNumberOfSolutions = 0;

    for (let p = 2; p <= limit; p += 2) {
        let numberOfSolutions = 0;
        for (let a = 2; a < p / 3; a++) {
            if (p * (p - 2 * a) % (2 * (p - a)) === 0) numberOfSolutions++;
        }
        if (numberOfSolutions > maxNumberOfSolutions) {
            maxNumberOfSolutions = numberOfSolutions;
            result = p;
        }
    }

    return result;
}

console.log(integerRightTriangles(1000));
