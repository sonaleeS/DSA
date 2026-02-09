console.log(isPalindrome([1, 2, 3, 4, 2, 1])); // true


function isPalindrome(array) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        if (array[left] !== array[right]) {
            return false
        }
        left++
        right--
    }
    return true
}