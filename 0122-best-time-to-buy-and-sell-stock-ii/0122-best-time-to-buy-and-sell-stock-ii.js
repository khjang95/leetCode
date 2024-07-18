/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let pricesLength = prices.length;
    let result = 0;

    let number = 0;

    while (number < pricesLength - 1) {

        for (let i = number + 1; i < pricesLength; i++) {
            if (prices[number] < prices[i]) {
                if (prices[i] > prices[i + 1]) {
                    result += prices[i] - prices[number];
                    number += i - number;
                } else if (i === pricesLength - 1) {
                    return result + prices[i] - prices[number];
                }
            } else {
                number ++;
            }
        }


        console.log(number)
        
    }

    return result;
};