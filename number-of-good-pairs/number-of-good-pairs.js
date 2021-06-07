/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    //create goodPairs variable = 0
    let goodPairs = 0;
    //iterate through nums
    nums.forEach((num, i) => {
        //starting at current index+1
        //loop through rest of nums
        for (let j = i + 1; j < nums.length; j++) {
            //if outer loop num = inner loop num
            if (num == nums[j]) {
                 //goodPairs++;
                goodPairs++;
            }     
        }  
    });
    //return goodPairs
    return goodPairs;
};