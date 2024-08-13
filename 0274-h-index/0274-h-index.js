/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var hIndex = 0;

    citations.sort((a, b) => b - a);

    console.log(citations);

    for (var i = 0; i < citations.length; i++) {
        if (citations[i] < hIndex) {
            return hIndex;
        }
        
        if (citations[i] > 0 && citations[i] !== hIndex) {
            hIndex ++;
        }
    }

    return hIndex;
};