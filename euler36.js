// Problem 36
// Double-base Palindromes

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function doubleBasePalindromes(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (isPalindrome(i.toString()) && isPalindrome(i.toString(2))) {
            sum += i;
        }
    }
    return sum;
}

console.log(doubleBasePalindromes(1000000)); 
