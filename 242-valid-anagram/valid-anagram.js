/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str = s.split("");
    let anagr = t.split("")
    str.sort();
    anagr.sort();
    if(str.join("") === anagr.join("")){
        return true;
    }else{
        return false;
    }
};