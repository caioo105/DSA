/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
   let positives = nums.filter(n => n > 0);
   
   let unique = new Set(positives);

   return unique.size;
};
    