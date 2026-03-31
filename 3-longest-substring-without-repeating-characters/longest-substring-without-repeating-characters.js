/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let max = 1;
    let counter = {};

    if(!s){
        return 0;
    }
    
    
    

    for(let r = 0; r < s.length; r++){
        
        if (counter[s[r]]){
            counter[s[r]] += 1;
        }else{
            counter[s[r]] = 1;
        }

        while(counter[s[r]] > 1){
            counter[s[l]] -= 1
            l += 1;
        }

        max = Math.max(max, r - l + 1);
    }

    return max;
};