/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let array = [...new Set(nums)];
    if( nums.length !== array.length){
        return true;
        }
        else{
            return false;
            }
};
