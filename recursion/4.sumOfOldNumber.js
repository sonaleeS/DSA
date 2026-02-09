let arr = [5, 3, 2, 0, 1]

function sum(n) {
    let isOdd = arr[n] % 2 != 0
    let condition = isOdd ? arr[n] : 0
    if (n == 0) {
        return condition
    }
    return ((condition + sum(n - 1)))
}
console.log(sum(arr.length - 1));