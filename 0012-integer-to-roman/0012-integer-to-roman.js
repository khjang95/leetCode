/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var numToString = num.toString();
    var numLength = numToString.length;

    var result = ''

    for (var i = 0; i < numLength; i++) {
        result += transRoman(Number(numToString[i]), numLength - 1 - i);
    }

    return result;
};

var transRoman = function (number, digit) {
    var roman = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }
    var standard = 5;
    var digits = digit === 0 ? 1 : 10 ** digit;

    if (number < standard) {
        if (number === 4) {
            return roman[digits] + roman[standard * digits];
        }
        
        return roman[digits].repeat(number);
    } else {
        if (number === 9) {
            return roman[digits] + roman[digits * 10];
        }

        return roman[standard * digits] + roman[digits].repeat(number - standard);
    }
}