/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    //create result string and set to empty
    let defanged = '';
    //split address into array using . as deliminator 
    let numbers = address.split('.');
    //loop through split array
    numbers.forEach((number, index) => {
        //if last element in array
        if(index === numbers.length - 1) {
            //concat value
            defanged += '' + number;
        //otherwise
        } else {
            //concat value in array and [.] to result string
            defanged += number + '[.]';
        }     
    });
    //return result string
    return defanged;
};