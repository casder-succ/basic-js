
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let characters1 = {};
  let characters2 = {};
  let counter = 0;
  for (let i = 0, j = 0; i < s1.length || j < s2.length; i += 1, j += 1) {
    if (!characters1[s1[i]]) {
      characters1[s1[i]] = 1;
    } else {
      characters1[s1[i]] += 1;
    }

    if (!characters2[s2[j]]) {
      characters2[s2[j]] = 1;
    } else {
      characters2[s2[j]] += 1;
    }
  }

  for (let character in characters1) {
    counter += characters2[character] ? Math.min(characters1[character], characters2[character]) : 0;
  }
  return counter;
}
