let arr = [2, 4, 5, 6, 7, 0]
let target = 6

function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1

}

const result = LinearSearch(arr, target)

console.log('result', result);