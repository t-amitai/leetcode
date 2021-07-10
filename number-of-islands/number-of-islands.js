/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    const visitIsland = (x,y) => {
        grid[x][y] = '0';
        grid[x+1] && grid[x+1][y] === '1' ? visitIsland(x+1, y) : null;
        grid[x-1] && grid[x-1][y] === '1' ? visitIsland(x-1, y) : null;
        grid[x][y-1] === '1' ? visitIsland(x, y-1) : null;
        grid[x][y+1] === '1' ? visitIsland(x, y+1) : null;
    };
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1') {
                visitIsland(i,j);
                count++;
            }
        }
    }
    return count;
};