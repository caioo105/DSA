/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i <= nums.length; i++){
        if(nums[i] === target){
            return i;
        }else if(nums.every(n => target > n)){
            return nums.length;
        }else if(target - nums[i] === 1 ){
            return i + 1;
        }else if(nums[i] - target === 1){
            return i;
        }else if(nums.every(n => target < n)){
            return 0;
        }else{
            if(nums.length === 1){
                return 0;
            }
        }
    }
};