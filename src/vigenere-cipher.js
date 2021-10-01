/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
    alphabetCount = 26;
    firstLetterCode = 'A'.charCodeAt(0);

    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
        let newKey = '';
        let newString = '';

        for (let i = 0, keyIndex = 0; i < message.length; i++) {
            if (message.toUpperCase().charCodeAt(i) < 65 || message.toUpperCase().charCodeAt(i) > 90) {
                newKey += message[i];
            } else {
                newKey += key[keyIndex % key.length];
                keyIndex += 1;
            }
        }
        console.log(newKey)
        for (let i = 0; i < message.length; i += 1) {
            const currLetterCode = message[i].toUpperCase().charCodeAt(0);
            const currLetterVal = currLetterCode - this.firstLetterCode;
            const currKeyVal = newKey[i].toUpperCase().charCodeAt(0) - this.firstLetterCode;

            if (currLetterCode >= this.firstLetterCode && currLetterCode <= this.firstLetterCode + this.alphabetCount) {
                newString += String.fromCharCode(
                    (currLetterVal + currKeyVal) % this.alphabetCount + this.firstLetterCode
                );
            } else {
                newString += newKey[i];
            }
        }

        return this.isDirect ? newString : newString.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
        const newKey = key.repeat(Math.ceil(message.length / key.length));
        let newString = '';

        for (let i = 0, j = 0; i < message.length; i += 1) {
            if (message[i] === ' ') {
                newString += ' ';
            } else {
                const currLetterCode = message[i].toUpperCase().charCodeAt(0)
                const currLetterVal = currLetterCode - this.firstLetterCode;
                const currKeyVal = newKey[j].toUpperCase().charCodeAt(0) - this.firstLetterCode;


                if (currLetterCode >= this.firstLetterCode && currLetterCode <= this.firstLetterCode + this.alphabetCount) {
                    newString += currLetterVal - currKeyVal >= 0 ?
                        String.fromCharCode((currLetterVal - currKeyVal) % this.alphabetCount + this.firstLetterCode) :
                        String.fromCharCode((currLetterVal - currKeyVal + this.alphabetCount) % this.alphabetCount + this.firstLetterCode);
                    j += 1;
                } else {
                    newString += message[i];
                }
            }
        }

        return this.isDirect ? newString : newString.split('').reverse().join('');
    }
}