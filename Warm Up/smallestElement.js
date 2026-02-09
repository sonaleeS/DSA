//smallest element

let arr = [2, -6, 4, 8, 1, -9]

function smallestElement() {
    let smallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    console.log(smallest)
}

smallestElement();