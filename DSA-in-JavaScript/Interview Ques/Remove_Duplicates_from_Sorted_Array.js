// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums){
    for(let i=0; i<nums.length; i++){
        if(i>nums.length - 1){
            break;
        }
        if(nums[i] === nums[i +1]){
            nums.splice(i,1)
            i--;
        } 
    }
    return nums.length;
  };
  const res = removeDuplicates([0,0,1,1,1,2,2,3,3,4,]);
  console.log(res)