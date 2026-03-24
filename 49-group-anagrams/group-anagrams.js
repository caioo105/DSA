/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for(str of strs){
        let dna = str.split('').sort().join('');

        if(!map.has(dna)){
            map.set(dna, []);
        }

        map.get(dna).push(str);
    }

    return Array.from(map.values());
};