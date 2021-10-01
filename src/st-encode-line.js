import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    let res = '';
    let count = 1;
    str.split('').forEach((el, index) => {
        if (str[index + 1] === el) {
            count += 1;
        } else {
            if (count === 1) res += str[index];
            else res += count + str[index];
            count = 1;
        }
    });

    return res;
}
