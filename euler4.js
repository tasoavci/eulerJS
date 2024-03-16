// Problem 4
// Largest Palindrome Product

function findTheBiggestPalindrome() {
    let maxPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            let palindrome = i * j;
            let palindromeStr = palindrome.toString();
            let reversePalindromeStr = palindromeStr.split('').reverse().join('');

            if (palindromeStr === reversePalindromeStr && palindrome > maxPalindrome) {
                maxPalindrome = palindrome;
            }
        }
    }

    return maxPalindrome;
}

console.log(findTheBiggestPalindrome());
