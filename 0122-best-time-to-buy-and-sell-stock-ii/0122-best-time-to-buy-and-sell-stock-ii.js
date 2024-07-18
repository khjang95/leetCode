/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let pricesLength = prices.length;
    let result = 0;

    let buy = 0;

    while (buy < pricesLength - 1) {

        for (let i = buy + 1; i < pricesLength; i++) {
            if (prices[buy] > prices[i]) {
                buy++;
                break;
            }

            if (prices[i] > prices[i + 1]) {
                result += prices[i] - prices[buy];
                
                sell = i - buy;
                buy += sell;
            } else if (i === pricesLength - 1) {
                return result + prices[i] - prices[buy];
            }

        }
    }

    return result;
};