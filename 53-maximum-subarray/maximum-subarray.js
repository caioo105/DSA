/**
 * @param {number[]} nums
 * @return {number}
 */
 //caio
var maxSubArray = function(nums){
    let sum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(sum < 0){
            sum = nums[i];
        }else{
            sum += nums[i];
        }

        if(sum > maxSum){
            maxSum = sum;
        }
    }
   return maxSum;
};