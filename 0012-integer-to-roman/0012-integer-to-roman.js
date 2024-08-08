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

var roman = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }

var transRoman = function (number, digit) {
    var midNumber = 5;
    var unit = digit === 0 ? 1 : 10 ** digit;

    if (number < midNumber) {
        if (number === 4) {
            return roman[unit] + roman[midNumber * unit];
        }
        
        return roman[unit].repeat(number);
    } else {
        if (number === 9) {
            return roman[unit] + roman[unit * 10];
        }

        return roman[midNumber * unit] + roman[unit].repeat(number - midNumber);
    }
}