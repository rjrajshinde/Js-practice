// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and 
// column-wise, return the number of negative numbers in grid.

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0

// Example 3:
// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Example 4:
// Input: grid = [[-1]]
// Output: 1

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100


//Method 1
console.log('Method 1');
var countNegatives_method1 = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(Math.sign(grid[i][j]) == -1){
                count++
            }
        }
    }
    return count;
};

var grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives_method1(grid));
grid = [[3,2],[1,0]];
console.log(countNegatives_method1(grid));
grid = [[1,-1],[-1,-1]];
console.log(countNegatives_method1(grid));
grid = [[5,1,0],[-5,-5,-6]];
console.log(countNegatives_method1(grid));




//Method 2
console.log('Method 2');
var countNegatives_method2 = function(grid) {
    let count = 0;
    for (const i of grid) {
        for (const j of i) {
            j < 0 ? count++ : count ;
        }
    }
    return count;
};


grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives_method2(grid));
grid = [[3,2],[1,0]];
console.log(countNegatives_method2(grid));
grid = [[1,-1],[-1,-1]];
console.log(countNegatives_method2(grid));
grid = [[5,1,0],[-5,-5,-6]];
console.log(countNegatives_method2(grid));