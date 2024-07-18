/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let pricesLength = prices.length;
    let result = 0;

    let greedy = 0;

    while (greedy < pricesLength - 1) {
        if (prices[greedy] > prices[greedy + 1]) {
            greedy++;
            continue;
        }

        for (let i = greedy + 1; i < pricesLength; i++) {
            if (prices[i] > prices[i + 1]) {
                console.log(i)
                console.log(greedy)
                result += prices[i] - prices[greedy];

                greedy += i - greedy;
                break;
            } else if (i === pricesLength - 1) {
                return result + prices[i] - prices[greedy];
            }
        }
    }

    return result;
};