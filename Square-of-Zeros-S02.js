// Solution 02

// O(n^4) time | O(1) space - where n is the height and width of the matrix
function squareOfZeroes(matrix) {
    const n = matrix.length;
    for (let topRow = 0; topRow < n; topRow++) {
        for (let leftCol = 0; leftCol < n; leftCol++) {
            let squareLength = 2;
            while (squareLength <= n - leftCol && squareLength <= n - topRow) {
                const bottomRow = topRow + squareLength - 1;
                const rightCol = leftCol + squareLength - 1;
                if (isSquareOfZeroes(matrix, topRow, leftCol, bottomRow, rightCol)) return true;
                squareLength++;
            }
        }
    }
    return false;
}

// r1 is the top row, c1 is the left column
// r2 is the bottom row, c2 is the right column
function isSquareOfZeroes(matrix, r1, c1, r2, c2) {
    for (let row = r1; row < r2 + 1; row++) {
        if (matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false;
    }
    for (let col = c1; col < c2 + 1; col++) {
        if (matrix[r1][col] !== 0 || matrix[r2][col] !== 0) return false;
    }
    return true;
}

exports.squareOfZeroes = squareOfZeroes;