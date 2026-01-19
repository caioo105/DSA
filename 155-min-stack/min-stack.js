var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else {
        
        const currentMin = this.minStack[this.minStack.length - 1];

       
        const newMin = Math.min(currentMin, val);

       
        this.minStack.push(newMin);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.stack.pop();

    
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   
    return this.minStack[this.minStack.length - 1];
};
