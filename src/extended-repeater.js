/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    const repeat = options.repeatTimes;
    const additionRepeat = options.additionRepeatTimes;
    const separator = options.separator || '+';
    const additionSeparator = options.additionSeparator || '|';
    const addition = `${options.addition}`;
    let strArr = Array(repeat).fill(`${str}`);

    const additionArray = Array(additionRepeat).fill(addition);


    const add = additionArray.join(additionSeparator);

    return strArr.map(el => {
        if (add === 'undefined') return el;
        return el + add;
    }).join(separator);


}
