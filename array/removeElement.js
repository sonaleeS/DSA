let arr = [3, 2, 2, 3]
let val = 3


function RemoveElements() {
    let pointer = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[pointer] = arr[i]
            pointer = pointer + 1
        }
    }
    console.log(arr)
}

RemoveElements()