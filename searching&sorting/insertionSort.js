let arr = [7, 4, 3, 5, 1, 2]

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentEle = arr[i]
        let previousEle = i - 1

        while (arr[previousEle] > currentEle && previousEle >= 0) {
            arr[previousEle + 1] = arr[previousEle]
            previousEle--
        }
        arr[previousEle + 1] = currentEle
    }
    return arr
}


console.log('insertion', insertionSort(arr));