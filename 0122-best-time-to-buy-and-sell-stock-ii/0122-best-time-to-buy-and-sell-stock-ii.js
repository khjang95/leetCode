/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let pricesLength = prices.length;
    let result = 0;

    let greedy = 0;

    while (greedy < pricesLength - 1) {

        for (let i = greedy + 1; i < pricesLength; i++) {
            if (prices[greedy] > prices[i]) {
                greedy++;
                break;
            }

            if (prices[i] > prices[i + 1]) {
                result += prices[i] - prices[greedy];
                greedy += i - greedy;
            } else if (i === pricesLength - 1) {
                return result + prices[i] - prices[greedy];
            }

        }
    }

    return result;
};