/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
I- two sorted arrays
O- median value of all numbers in both arrays
C- O(log(m+n)), 1 array will be populated with numbers
E- one empty array with one value
*/


var findMedianSortedArrays = function(nums1, nums2) {
    //"Base case"
    //check if nums1 or nums2 is not populated
    if(nums1.length === 0) {
        return calculateMedian(nums2);
    } else if (nums2.length === 0) {
        return calculateMedian(nums1)
    } else {
        //if nums1[first] >= nums2[last]
        if(nums1[0] >= nums2[nums2.length - 1]) {
            //concat nums2 + nums1
            //feed into median calculator and return
            //else if nums2[first] >= nums1[last]
            return calculateMedian(nums2.concat(nums1));
        }
        if(nums2[0] >= nums1[nums1.length - 1]) {
            //concat nums1 + nums2
            //feed into median calculator and return
            return calculateMedian(nums1.concat(nums2));
        }
        //create merge array
        let merged = [];
        //create ptr1 set to 0
        let ptr1 = 0;
        //create prt2 set to 0
        let ptr2 = 0;
        let sorting = true;
        // let remainder = [];
        while(sorting) {
            if (nums1[ptr1] < nums2[ptr2]) {
                merged.push(nums1[ptr1]);
                ptr1++;
            } else if (nums2[ptr2] < nums1[ptr1]) {
                merged.push(nums2[ptr2]);
                ptr2++;
            } else {
                merged.push(nums1[ptr1]);
                merged.push(nums2[ptr2]);
                ptr1++;
                ptr2++;
            }
            if (ptr1 === nums1.length) {
                merged = merged.concat(nums2.slice(ptr2))
                sorting = false;
            } else if (ptr2 === nums2.length) {
                merged = merged.concat(nums1.slice(ptr1));
                sorting = false;
            }
        }
        return calculateMedian(merged);
    }         
};

const calculateMedian = (array) => {
    if(array.length === 1) {
            return array[0]
        } else {
            if(array.length % 2 !== 0) {
                return array[(array.length - 1) / 2];
            } else {
                let smallest = array[(array.length / 2) - 1];
                let largest = array[array.length / 2];
                return ((largest - smallest) / 2) + smallest;
            }
        }
        //take populated array
        //if length 1
            //return value
        //otherwise
            //if array lenght is odd
                //calcuate center index
                //return value at index
            //otherwise
                //find median between two centermost index values
                //return value
};

