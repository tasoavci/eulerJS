// Problem 18
// Maximum Path Sum I

function maximumTrianglePathSum(triangle) {
    // Convert the input string to a 2D array of numbers
    const rows = triangle.trim().split('\n').map(row => row.trim().split(' ').map(Number));

    // Start from the second to last row and move upwards
    for (let row = rows.length - 2; row >= 0; row--) {
        for (let col = 0; col < rows[row].length; col++) {
            // Replace each number with the sum of itself and the larger of its two adjacent numbers below
            rows[row][col] += Math.max(rows[row + 1][col], rows[row + 1][col + 1]);
        }
    }

    // The top element of the triangle now contains the maximum total
    return rows[0][0];
}

const triangle = `
75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`;

console.log(maximumTrianglePathSum(triangle));
