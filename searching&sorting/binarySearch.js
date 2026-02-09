// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


let nums = [-1, 0, 3, 5, 9, 12]
let target = 9

function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }

    }
    return -1
}

const result = binarySearch(nums, target)

console.log('result', result);



// time complexcity = o(log n)
//space complexity = 0(1) constant time