// Problem 26
// Reciprocal Cycles

function findLongestRecurringCycle(limit) {
    let sequenceLength = 0;
    let number = 0;

    for (let i = limit; i > 1; i--) {
        if (sequenceLength >= i) {
            break;
        }

        let remainders = new Array(i).fill(0);
        let value = 1;
        let position = 0;

        while (remainders[value] === 0 && value !== 0) {
            remainders[value] = position;
            value *= 10;
            value %= i;
            position++;
        }

        if (position - remainders[value] > sequenceLength) {
            number = i;
            sequenceLength = position - remainders[value];
        }
    }

    return number;
}

console.log(findLongestRecurringCycle(1000)); 
