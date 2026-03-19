/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    let chars = s.split('');
    let start = 0;

    for(let end = 0; end <= chars.length; end++){
        if(end === chars.length || chars[end] === ' '){
            reverse(chars, start, end - 1);

            start = end + 1;
        }
    }

    return chars.join('');
};

const reverse = function(chars, left, right){
    while(left < right){
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }
};