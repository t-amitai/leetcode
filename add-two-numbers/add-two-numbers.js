/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
I - two linked lists representing two non-negative integers with digits stored
    in reverse order
O - sum of the two integers as a linked list
C - 
E - 
*/
// var convertToNumber = function(list){
//     let number = 0; 
//     let power = 0;
//     const convert = (node) => {
//         if (node) {
//             if (node.val !== 0) {
//                 console.log(node.val);
//                 number += node.val * Math.pow(10, power);;
//             }
//             if(node.next !== undefined) {
//                 power++;
//                 convert(node.next);
//             }
//         }
//     };
//     convert(list);
//     console.log(number);
//     return number;
// };

// var addTwoNumbers = function(l1, l2) {
//     let num1 = convertToNumber(l1);
//     let num2 = convertToNumber(l2);
//     let sum = num1 + num2;
//     sum = '' + sum;
//     let list = null;
//     let node = null;
//     for(let i = sum.length-1; i>=0;i--) {
//         if(list === null) {
//             node = {val: parseInt(sum[i]), next:null};
//             list = node;
//         } else {
//             let temp = {val: parseInt(sum[i]), next:null};
//             node.next = temp;
//             node = temp;
//         }
//     }
//     return list;
// };

var addTwoNumbers = function(l1, l2) {
    let sum = null;
    let node = {val: null, next: null};
    let remainder = 0;
    const add = (node1, node2) => { 
        let val = remainder;
        val += node1 && node1.val ? node1.val : 0;
        val += node2 && node2.val ? node2.val : 0;
        if (val >= 10) {
            val = val % 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        if(sum === null) {
            node.val = val;
            sum = node;
        } else {
            let temp = {val, next: null};
            node.next = temp;
            node = temp;
        }
        let next1 = node1 && node1.next ? node1.next : null;
        let next2 = node2 && node2.next ? node2.next : null;
        if(next1 || next2) {
            add(next1, next2);
        }
    };
    add(l1, l2);
    if (remainder) {
        let temp = {val: remainder, next: null};
        node.next = temp;
        node = temp;
    }
    return sum;
};

