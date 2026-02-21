// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

let nums1 = [2, 4], nums2 = [1, 2, 3, 4]

var nextGreaterElement = function (nums1, arr) {
    let ans = []
    let stack = []
    let n = arr.length
    let map = {}
    map[arr[n - 1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        const top = stack[stack.length - 1];
        if (arr[i] < top) {
            stack.push(arr[i])
            map[arr[i]] = top
        } else {
            const top = stack[stack.length - 1];
            while (stack.length) {
                if (arr[i] > top) {
                    stack.pop()
                } else {
                    map[arr[i]] = top
                    break;
                }
            }
            if (stack.length === 0) {
                map[arr[i]] = -1
            }
            stack.push(arr[i])
        }
    }

    for (let i = 0; i < nums1.length; i++) {
        ans.push(map[nums1[i]])
    }
    return ans
};

var nextGreaterElementOptimize = function (nums1, nums2) {
    let stack = []
    let ans = []
    let n = nums2.length
    let map = {}
    stack.push(nums2[n - 1])
    map[nums2[n - 1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            if (stack[stack.length - 1] < nums2[i]) {
                stack.pop()
            } else {
                map[nums2[i]] = stack[stack.length - 1]
                break;
            }
        }

        if (stack.length === 0) {
            map[nums2[i]] = -1
        }
        stack.push(nums2[i])

    }
    return nums1.map((s) => map[s])
};


let result = nextGreaterElement(nums1, nums2)
console.log('result', result);