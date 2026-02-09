let arr = [3, 1, 2, 8]

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let res = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]
}

const result = mergeSort(arr)
console.log('result', result);


// Time Complexity: O(n log n) — Divide takes log n steps and merging takes linear time.
// Space Complexity: O(n) — Additional space is needed to store the merged arrays.