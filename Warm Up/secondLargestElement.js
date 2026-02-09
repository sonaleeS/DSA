let arr = [4, 9, 0, 2, 8, 10, 20, 20, 7, 1]

function secondLargestElement() {

    if (arr.length === 0) {
        return 'invalid array'
    }
    if (arr.length < 2) {
        return 'array should be contain more than 2 elements'
    }

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    
    return secondLargest

}

const result = secondLargestElement();

console.log(result)