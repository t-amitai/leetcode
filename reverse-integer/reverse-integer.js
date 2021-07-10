/**
 * @param {number} x
 * @return {number}
 */

/*
I - number
O - number reversed
C - input between -2^31 and 2^31 - 1, if result is out of range return 0
E - single digit number inputted, output out of range
*/

var reverse = function(x) {
    //convert x to a numString
    let numString = x.toString();
    //if numString length 1
    if (numString.length === 1) {
        //return x
        return x;
    }
    //create empty result string;
    let result = '';
    //create isNegative boolean set to false
    let isNegative = false;
    //if numString index 0 === '-'
    if (numString[0] === '-') {
        //set isNegative to true
        isNegative = true;
    }
    //if isNegative
    if (isNegative) {
        //concat '-' to result
        result = result.concat('-');
        //loop through numString backwards until index 1
        for (let i = numString.length - 1; i > 0; i--) {
            //concat digit to result string
            result = result.concat(numString[i]);
        }
    //else
    } else {
        //loop through numString backwards until index 0
        for (let i = numString.length - 1; i >= 0; i--) {
            //concat digit to result string
            result = result.concat(numString[i]);
        }
    }
    //concert result back to number
    result = parseInt(result);
    //check if result is in range
    if (result <= Math.pow(2,31) - 1 && result >= Math.pow(-2,31)) {
        //return result
        return result;
    }    
    //otherwise return 0
    return 0;
};