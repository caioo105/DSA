/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    class MinHeap {
        constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.size();

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
                smallest = left;
            }

            if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
            }
        }
    }
    
    const minHeap = new MinHeap();

    for(let [num, freq] of map.entries()){
        minHeap.push([num, freq]);

        if(minHeap.size() > k){
            minHeap.pop();
        }
    }

    const result = [];
    while(minHeap.size() > 0){
        result.push(minHeap.pop()[0]);
    }

    return result;

};