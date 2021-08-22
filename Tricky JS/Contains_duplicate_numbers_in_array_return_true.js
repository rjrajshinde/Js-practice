// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.

// Example 1:   
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//Method 1

var containsDuplicate_method1 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(i!=j){
                if(nums[i] == nums[j]){
                    return true;
                }
            }
        }
    }
    return false;
};


let nums1 = [1,2,3,1];
console.log(containsDuplicate_method1(nums1));

let nums2 = [1,2,3,4];
console.log(containsDuplicate_method1(nums2));

let nums3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate_method1(nums3));

//Method 2

var containsDuplicate_method2 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        return nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]) ? true : false;
    }
};

let nums4 = [1,2,3,1];
console.log(containsDuplicate_method2(nums4));

let nums5 = [1,2,3,4];
console.log(containsDuplicate_method2(nums5));

let nums6 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate_method2(nums6));