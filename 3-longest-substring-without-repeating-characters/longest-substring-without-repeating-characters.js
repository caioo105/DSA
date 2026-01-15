/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let max = 1;
    let counter = {};
    counter[s[0]] = 1;

    if(!s){
        return 0;
    }
    
    while(r < s.length - 1 ){
        r += 1;
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