let nums1 = [2, 7, 10, 0, 0, 0]
let nums2 = [1, 2, 3]
let m = 3
let n = 3

//1st Approch
function MergeSortedArray1stApproch(nums1, nums2, m, n) {
    let nums1Copy = nums1.slice(0, m)
    let p1 = 0
    let p2 = 0

    for (let i = 0; i < m + n; i++) {

        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1]
            p1++
        } else {
            nums1[i] = nums2[p2]
            p2++
        }
    }
    return nums1
}

//2nd Approch
function MergeSortedArray2ndApproch(nums1, nums2, m, n) {
    let p1 = m - 1
    let p2 = n - 1

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1]
            p1--
        } else {
            nums1[i] = nums2[p2]
            p2--
        }
    }
    return nums1
}

const result = MergeSortedArray2ndApproch(nums1, nums2, m, n)
console.log('result', result);