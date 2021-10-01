/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n) {
  let arr = n.toString().split('').map(el => Number(el));
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return Number(arr.map(el => el.toString()).join(''));
}
