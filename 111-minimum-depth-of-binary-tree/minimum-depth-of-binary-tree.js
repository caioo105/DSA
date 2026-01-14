/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null){
        return 0;
    }

    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);

    if(leftDepth === 0){
        return 1 + rightDepth;
    }
    if(rightDepth === 0){
        return 1 + leftDepth;
    }

    if(leftDepth < rightDepth){
        return 1 + leftDepth;
    }else{
        return 1 + rightDepth;
    }
};