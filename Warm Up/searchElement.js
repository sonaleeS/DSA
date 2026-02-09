
let array = [2, 3, 4, 6, 8, 10, 27]

function findElement(x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return i
        }
    }
    return -1
}

const result = findElement(90)
console.log(result)