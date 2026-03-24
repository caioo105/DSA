/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        
        if(!map.has(currentNumber)){
           map.set(currentNumber, 1 );
        }else{
            let currentQuantity = map.get(currentNumber);
            map.set(currentNumber, currentQuantity + 1);
        }
        
    }

    return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(pair => pair[0]);
                    

};