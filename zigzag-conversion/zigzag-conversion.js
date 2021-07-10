/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/*
I: string and numRows
O: zigzagged string
C:
E: numRows = 1
*/

var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    //create array of lenght numRows of empty arrays
    let array = [];
    for(let i = 0; i < numRows; i++){
        array.push([]);
    }
    //create counter variable set to 0
    let counter = 0;
    //create up variable set to true
    let up = true;
    //loop through s
    for(let char of s) {
        //push char to array located at index of counter
        array[counter].push(char);
        //if up is true
        if(up) {
            //if counter < numRows - 1
            if(counter < numRows - 1) {
                //counter++
                counter++;
            } else {
            //else
                //up = false
                up = false;
                //counter--
                counter--;
            }
        } else {
        //else
            //if counter > 0 
            if(counter > 0) {
                //counter--
                counter--;
            } else {
            //else
                //up = true;
                up = true;
                //counter++
                counter++;
            }
        }
    }
    //create result string
    let result = '';
    //loop through array
    array.forEach(line => {
        //loop through nested array 
        line.forEach(char => {
            //push char to result
            result = result.concat(char);
        });
    });
    //return result
    return result;
};