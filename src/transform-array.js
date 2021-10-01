/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {*[]} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

    const array = arr.slice(0);

    for (let i = 0; i < array.length; i += 1) {

        if (array[i] === "--double-next" && array[i + 2] === "--discard-prev") {
            array.splice(i, 1);
            array.splice(i + 1, 1);
        }

        if (array[i] === "--discard-next" && array[i + 2] === "--discard-prev") {
            array.splice(i, 3);
        }

        if (array[i] === "--discard-next" && array[i + 2] === "--double-prev") {
            array.splice(i, 3);
        }

        if (array[i] === "--discard-next" && array[i - 2] !== "--double-next") {
            array[i + 1] = undefined;
            array.splice(i, 1);
        }


        if (array[i] === "--discard-prev") {
            array[i - 1] = undefined;
            array.splice(i, 1);
        }
        if (array[i] === "--double-next") {
            if (array[i + 1] !== undefined) {
                array[i] = array[i + 1];
            } else {
                array.splice(i, 1);
            }
        }

        if (array[i] === "--double-prev") {
            if (array[i - 1] !== undefined) {
                array[i] = array[i - 1];
            } else {
                array.splice(i, 1);
            }
        }

        if (array[i] === undefined) {
            array.splice(i, 1);
            i -= 1;
        }

        if (array[i] === "--discard-next") {
            array.splice(i, 1);
        }
    }

    return array;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],))
