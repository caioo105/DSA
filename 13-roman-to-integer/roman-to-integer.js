/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let num = 0;
   let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
   };

   for(let i = 0; i < s.length; i++){
    let atual = nums[s[i]];
    let proximo = nums[s[i + 1]];

    if(proximo > atual){
        num -= atual;
    }else{
        num += atual;
    }
    
  }

  return num;
}