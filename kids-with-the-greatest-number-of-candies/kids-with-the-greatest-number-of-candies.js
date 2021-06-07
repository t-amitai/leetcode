/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    //create mostCandies variable
    let mostCandies = 0;
    candies.forEach(amount => {
        //set to largest value in candies
        if (amount > mostCandies) {
            mostCandies = amount;
        }
    });
    //create results array
    let results = [];
    //loop through candies
    candies.forEach(amount => {
        //if value + extraCandies >= mostCandies
        if(amount + extraCandies >= mostCandies) {
            //push true to results
            results.push(true);
        } else {
        //otherwise
            results.push(false);
            //push false tp results
        }    
    });
    return results;
};