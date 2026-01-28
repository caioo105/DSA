/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
   const operation = [...new Set(nums.filter(n => n > 0))];
return operation.length;
}