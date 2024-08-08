/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const numToString = num.toString();
    const numLength = numToString.length;

    let result = ''

    for (let i = 0; i < numLength; i++) {
        result += transRoman(Number(numToString[i]), numLength - 1 - i);
    }

    return result;
};

const transRoman = (number, digit) => {
    const roman = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }
    const standard = 5;
    const digits = digit === 0 ? 1 : 10 ** digit;

    if (number < standard) {
        if (number === 4) {
            return roman[digits] + roman[standard * digits];
        }

console.log(roman[digits].repeat(number))
        
        return roman[digits].repeat(number);
    } else {
        if (number === 9) {
            return roman[digits] + roman[digits * 10];
        }

console.log(roman[standard * digits] + roman[digits].repeat(number - standard))

        return roman[standard * digits] + roman[digits].repeat(number - standard);
    }
}