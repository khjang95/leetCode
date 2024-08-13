/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var hIndex = 0;

    citations.sort((a, b) => b - a);

    for (var i = 0; i < citations.length; i++) {
        if (citations[i] <= hIndex) {
            return hIndex;
        }

            hIndex ++;
        
    }

    return hIndex;
};