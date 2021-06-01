/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //create result array and set to empty
    let result = [];
    //loops over nums
    for(let i = 0; i < nums.length; i++) {
        //for range 0 to current index
        let sum = 0;
        for(let j = 0; j <= i; j++) {
            //sum values of nums at indices
            sum += nums[j];
        } 
        //push value to result array  
        result.push(sum);
    }
    //return result array
    return result;
};