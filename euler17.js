// Problem 17
// Number Letter Counts

function numberToWords(n) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    const thousand = 'thousand';
    const and = 'and';

    let word = '';

    if (n === 1000) {
        return 'onethousand';
    }

    if (n >= 100) {
        word += ones[Math.floor(n / 100)] + hundred;
        n %= 100;
        if (n !== 0) word += and;
    }

    if (n >= 20) {
        word += tens[Math.floor(n / 10)];
        n %= 10;
    } else if (n >= 10) {
        word += teens[n - 10];
        n = 0;
    }

    if (n > 0) {
        word += ones[n];
    }

    return word;
}

function countLetters(limit) {
    let totalLetters = 0;
    for (let i = 1; i <= limit; i++) {
        totalLetters += numberToWords(i).length;
    }
    return totalLetters;
}

console.log(countLetters(5));
console.log(countLetters(1000)); 
