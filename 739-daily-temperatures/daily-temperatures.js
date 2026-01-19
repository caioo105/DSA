/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const results = new Array(temperatures.length).fill(0);
    const stack = [];

    for (const [i, temp] of temperatures.entries()) {
        while (
            stack.length > 0 &&
            temperatures[stack[stack.length - 1]] < temp
        ) {
            const index = stack.pop();
            results[index] = i - index;
        }

        stack.push(i);
    }

    return results;
};
