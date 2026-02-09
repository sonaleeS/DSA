// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

//##### 1st Approch
let nums = [2, 2, 1]
function singleNumber1stApproch(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i]
        }
    }
}

// const result = singleNumber1stApproch(nums)

//##### 2nd Approch (Bitwise XOR) => use to remove duplicates from the array 
function singleNumber2ndApproch(nums) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        count ^= nums[i]
    }
    return count
}

const result = singleNumber2ndApproch(nums)
console.log('result', result);