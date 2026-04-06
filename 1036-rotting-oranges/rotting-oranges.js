/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let minutes = 0;
    let freshOranges = 0;

    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges += 1;
            }
        }
    }

    
    if (freshOranges === 0) return 0;

   
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 

    while (queue.length > 0 && freshOranges > 0) {
        minutes++;
        let size = queue.length; 

        for (let i = 0; i < size; i++) {
            let [r, c] = queue.shift(); 

           
            for (let [dr, dc] of directions) {
                let row = r + dr;
                let col = c + dc;

                
                if (row >= 0 && row < grid.length && 
                    col >= 0 && col < grid[0].length && 
                    grid[row][col] === 1) {
                    
                    grid[row][col] = 2;       
                    freshOranges--;          
                    queue.push([row, col]);  
                }
            }
        }
    }

    
    return freshOranges === 0 ? minutes : -1;
};