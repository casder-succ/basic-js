/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    return matrix.reduce((sum, val, i) => {
        return sum += val.reduce((sum, val, j) => {
            return sum += (i === 0 || matrix[i - 1][j] !== 0) ? val : 0;
        }, 0)
    }, 0);
}
