/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    //create result array
    let result = [];
    //slice nums from n to end
    let y = nums.slice(n);
    //loop through slice
    for ( let i = 0; i < y.length; i++ ) {
        //push nums[i] then slice[i] to result
        result.push(nums[i]);
        result.push(y[i]);
    }
    //return result
    return result;
};