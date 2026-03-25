/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    //const map = {
        //"sum" : "+",
        //"sub" : "-",
        //"mul" : "*",
        //"div" : "/" 
    //};

    for(let str of tokens){
        if(str === "+" || str === "-" || str === "*" || str === "/" ){
            let b = Number(stack.pop());
            let a = Number(stack.pop());

            if(str === "+"){
                stack.push(a + b);
            
            }else if (str === "-"){
                stack.push(a - b);
            
            }else if(str === "*"){
                stack.push(a * b);
            
            }else if(str === "/"){
                stack.push(Math.trunc(a / b));
            } 
        }else{
            stack.push(Number(str));
        }
    }

    return stack.pop();
};