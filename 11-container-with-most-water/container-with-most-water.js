/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let areaMax = 0;
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    
    while(l < r){
        let currentArea = (r - l) * Math.min(height[l], height[r]);
        maxArea = Math.max(maxArea, currentArea);
        if(height[l] < height[r]){
            l++;
        }else{
            r--;
        }
    }

    return maxArea;
};
