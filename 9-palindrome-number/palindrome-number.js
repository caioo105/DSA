/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xRev = String(x);
    let reverse = "";
    
    for(let i = xRev.length - 1; i >= 0; i--){
       reverse += xRev[i];
    }

    return reverse === xRev;
};