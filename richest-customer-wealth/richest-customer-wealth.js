/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    //create richest variable and set to 0
    let richest = 0;
    //loop through accounts
    accounts.forEach(customer => {
        //loop through individual customer
        let sum = 0;
        customer.forEach(bank => {
            //sum values in all banks
            sum += bank;
        });
        //if sum > richest
        if(sum > richest) {
            //set richest to sum
            richest = sum;
        }            
    })
    //return richest
    return richest;
};