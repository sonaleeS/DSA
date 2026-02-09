let arr = [0, 0, 1, 1, 1, 2, 3, 3, 4]
// let arr = [1, 1, 2, 3, 3, 5]


function RemoveDublicates() {
    let pointer = 0
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i], arr[pointer], arr[i] > arr[pointer]);
        if (arr[i] > arr[pointer]) {
            pointer = pointer + 1
            arr[pointer] = arr[i]
        }
    }
    console.log(arr)
}

RemoveDublicates()