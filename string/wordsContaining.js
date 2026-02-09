
let words = ["abc", "bcd", "aaaa", "cbc"], x = "a"

var findWordsContaining = function (words, x) {
    let n = words.length

    let arr = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                arr.push(i)
                break
            }
        }
    }
    return arr
};
console.log('result', findWordsContaining(words, x));      