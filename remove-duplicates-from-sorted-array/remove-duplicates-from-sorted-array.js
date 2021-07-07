/**
 * @param {number[]} nums
 * @return {number}
 */

/*
I - sorted array ascending
O - length of array with duplicates removed
C - must modify input array in place, must have constant extra memory
E - nums is length 1
*/
var removeDuplicates = function(nums) {
    if (nums.length === 1) {
        return 1;
    }
    let current;
    let next;
    let j = 1;
    for(let i = 0; i < nums.length;) {
        current = nums[i];
        next = nums[j];
        if(current !== next) {
            i++;
            j++
        } else {
            nums.splice(j,1);
        }
    }
    return nums.length;
};