/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if(intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++){
        let currentInterval = intervals[i];
        let lastAddedInterval = result[result.length - 1];

        if(currentInterval[0] <= lastAddedInterval[1]){
            lastAddedInterval[1] = Math.max(lastAddedInterval[1], currentInterval[1])
        }else{
            result.push(currentInterval);
        }
    }

    return result;
};