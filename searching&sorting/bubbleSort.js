let arr = [4, 5, 1, 3, 9]

function bubbleSort(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let isSorted = false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = true
            }
        }
        if (!isSorted) {
            break
        }
    }
    return arr

}

console.log('bubbleSort(arr)', bubbleSort(arr));
