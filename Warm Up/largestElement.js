//largest element

let arr = [2, -6, 4, 8, 1, -9]

function largestElement() {
    let largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    console.log(largest)
}

largestElement();