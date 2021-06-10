/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    //create count variable set to 0
    let count = 0;
    //loop through jewels
    [...jewels].forEach(jewel => {
        //loop through stones
        [...stones].forEach(stone => {
            //if current jewel is in stones
            if(jewel === stone) {
                //count ++
                count++;
            }
        })       
    });
    //return count
    return count;
};