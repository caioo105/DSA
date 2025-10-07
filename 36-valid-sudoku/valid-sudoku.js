/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
       let rowSet = new Set();
       let colSet = new Set();

       for(let j = 0; j < board.length; j++){
        let rowVal = board[i][j];
        let colVal = board[j][i];

        if (rowVal !== '.' && rowSet.has(rowVal)) return false;
            rowSet.add(rowVal);
            
        if (colVal !== '.' && colSet.has(colVal)) return false;
            colSet.add(colVal);
       }
    }

    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            let boxSet = new Set();

            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    let val = board[boxRow + r][boxCol + c];
                    if (val !== '.' && boxSet.has(val)) return false;
                    boxSet.add(val);
                }
            }
        }
    }


    return true;
};