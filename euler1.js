// Problem 1
// Multiples of 3 or 5

let sum = 0
for (let i = 0; i < 10; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i
    }
}
console.log(sum)