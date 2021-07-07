/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
I - array of numbers and target value
O - same array with target value removed
C - must modify input array in place, must use O(1) extra memory
E - val is not found in nums, nums contains only val
*/
var removeElement = function(nums, val) {
    const length = nums.length;
    for(let i = 0; i < length;) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    };
    return;
};