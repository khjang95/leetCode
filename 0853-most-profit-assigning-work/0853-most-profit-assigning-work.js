/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const jobs = [];

    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }

    jobs.sort((a, b) => a[0] - b[0]);
    
    worker.sort((a, b) => a - b);

    let maxProfit = 0;
    let jobIndex = 0;
    let bestProfit = 0;

    for (let ability of worker) {
        while (jobIndex < jobs.length && ability >= jobs[jobIndex][0]) {
            bestProfit = Math.max(bestProfit, jobs[jobIndex][1]);
            jobIndex++;
        }
        
        maxProfit += bestProfit;
    }

    return maxProfit;
};